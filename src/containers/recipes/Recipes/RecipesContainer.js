import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as actions from "../../../actions";
import Recipe from "../../../components/Recipe/Recipe";
import { getRecipesSelector } from "../../../reducers/selectors";

export class RecipesContainer extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  onRecipeClicked = recipe => {
    this.props.selectRecipe(recipe);
    this.props.history.push("/" + recipe.sys.id);
  };

  render() {
    return (
      <section>
        <div className="container">
          {this.props.recipes.map(recipe => (
            <Recipe
              key={recipe.sys.id}
              recipe={recipe}
              onRecipeClick={this.onRecipeClicked}
            />
          ))}
        </div>
      </section>
    );
  }
}

RecipesContainer.propTypes = {
  recipes: PropTypes.array,
  getRecipes: PropTypes.func.isRequired,
  selectRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    recipes: getRecipesSelector(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRecipes: actions.getRecipes,
      selectRecipe: actions.selectRecipe
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesContainer);
