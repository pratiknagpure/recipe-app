import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import MainContainer from "./containers/mainContainer";
import RecipesContainer from "./containers/recipes/Recipes/RecipesContainer";
import RecipeDetails from "./containers/recipes/RecipeDetails/RecipeDetails";

const Home = () => (
  <h1>
    <a href="/about">Click Me</a>
  </h1>
);
const About = () => <h1>About Us</h1>;

function App() {
  return (
    <React.Fragment>
      <MainContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={RecipesContainer} />
            <Route path="/:id" component={RecipeDetails} />
          </Switch>
        </BrowserRouter>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
