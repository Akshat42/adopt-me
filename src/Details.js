import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true, showModal: false };
  }

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({showModal: !this.state.showModal});
  adopt = () => (window.location= "https://bit.ly/pet-adopt"); 

  render() {
    const { animal, name, breed, city, state, description, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
              onClick={this.toggleModal}
               style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
        </div>
        <p>{description}</p>
        {
          this.state.showModal ? (
            <Modal>
              <div>
                <h1>Are you sure you want to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null
        }
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function detailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
