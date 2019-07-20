import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.css";

export class Recipe extends Component {
  onRecipeClick = () => {
    this.props.onRecipeClick(this.props.recipe);
  };

  render() {
    return (
      <div onClick={this.onRecipeClick} className={styles.Recipe}>
        <div className="each-recipe">
          <div className={styles.RecipeImgHolder}>
            {/* <img src="" alt="" /> */}
          </div>
          <div className={styles.RecipeContentHolder}>
            <div className="title">
              {this.props.recipe.fields.name
                ? this.props.recipe.fields.name
                : this.props.recipe.fields.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        caption: PropTypes.string,
        "media-metadata": PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
            format: PropTypes.string
          })
        )
      })
    )
  }).isRequired,
  onRecipeClick: PropTypes.func.isRequired
};

export default Recipe;
