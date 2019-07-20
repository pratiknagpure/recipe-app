function getRecipeState(state) {
  return state.recipe;
}

export function getRecipesSelector(state) {
  return getRecipeState(state).recipes;
}

export function getSelectedRecipeSelector(state) {
  return getRecipeState(state).selectedRecipe;
}

export function getRecipesLoadingSelector(state) {
  return getRecipeState(state).loading;
}

export function getRecipesErrorSelector(state) {
  return getRecipeState(state).error;
}
