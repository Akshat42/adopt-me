import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Rose",
//       animal: "Dog",
//       breed: "Labrador",
//     }),
//     React.createElement(Pet, {
//       name: "Anmoli",
//       animal: "Dog",
//       breed: "Chihuahua",
//     }),
//     React.createElement(Pet, {
//       name: "Mithu",
//       animal: "Bird",
//       breed: "Indian Parrot",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to={"/"}>Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
