import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  selectedRecipe: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADER:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.recipes],
        loading: false
      };

    case actionTypes.SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: { ...action.recipe },
        loading: false
      };

    case actionTypes.DESELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: null
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
