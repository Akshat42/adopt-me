import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = ({name, animal, breed, id, images, location}) => {

  let image = 'http://pets-images.dev-apis.com/pets/none.jpg'

  if(images.length) {
    image = images[0];
  } 

  return (
    <a href = {`/details/${id}`} className = "pet">
      <div className = "image-container">
        <img src = {image} alt = {name} />
      </div>
      <div className = "info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
