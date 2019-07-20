import * as actionTypes from "./actionTypes";
import * as constants from "../AppConstants";
import axios from "axios";
import * as contentful from "contentful";

export const setRecipes = recipes => {
  return {
    type: actionTypes.SET_RECIPES,
    recipes: recipes
  };
};

export const getRecipes = () => {
  return dispatch => {
    dispatch(startLoader());

    var client = contentful.createClient({
      space: constants.spaceId,
      accessToken: constants.accessToken
      // environment: constants.environmentId
    });
    client
      .getEntries()
      .then(entries => {
        dispatch(setRecipes(entries.items));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  };
};

export const getRecipe = id => {
  return dispatch => {
    dispatch(startLoader());
    //  dispatch(selectRecipe(recipe));

    // axios
    //   .get("")
    //   .then(response => {
    //     const recipe = response.data.results.find(recipe => recipe.id === +id);
    //     dispatch(selectRecipe(recipe));
    //   })
    //   .catch(error => {
    //     dispatch(setError(error));
    //   });
  };
};

export const selectRecipe = recipe => {
  return {
    type: actionTypes.SELECT_RECIPE,
    recipe: recipe
  };
};

export const deselectRecipe = () => {
  return {
    type: actionTypes.DESELECT_RECIPE
  };
};

export const setError = error => {
  return {
    type: actionTypes.SET_ERROR,
    error: error
  };
};

export const startLoader = () => {
  return {
    type: actionTypes.START_LOADER
  };
};
