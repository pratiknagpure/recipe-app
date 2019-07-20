import { combineReducers } from "redux";
import recipeReducer from "./recipes";

export default combineReducers({
  recipe: recipeReducer
});
