import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as actions from "../../../actions";
import styles from "./styles.css";
import { getSelectedRecipeSelector } from "../../../reducers/selectors";

export class RecipeDetails extends Component {
  componentDidMount() {
    if (!this.props.selectedRecipe) {
      const { id } = this.props.match.params;
      this.props.getRecipe(id);
    }
  }

  onBackToList = () => {
    this.props.deselectRecipe();
    this.props.history.push("/");
  };

  render() {
    if (!this.props.selectedRecipe) {
      return <span>Loading...</span>;
    }

    return (
      <div className={styles.RecipeDetailsWrapper}>
        <div className="container">
          <div className="a-detail">
            <div className={styles.BackToList}>
              <button onClick={this.onBackToList}>Back to list</button>
            </div>
            <h1 className={styles.Title}>
              {/* <a
                href={this.props.selectedRecipe.url}
                target="_blank"
                rel="noopener noreferrer"
              > */}
              {this.props.selectedRecipe.fields.title}
              {/* </a> */}
            </h1>

            <div className="row">
              <div className="col-md-6">
                <div className={styles.MainImageHolder}>
                  {/* <figure>
                    <img
                      src={
                        this.props.selectedRecipe.media[0]["media-metadata"][2]
                          .url
                      }
                      alt={this.props.selectedRecipe.media[0].caption}
                    />
                    <figcaption>
                      {this.props.selectedRecipe.media[0].caption}
                    </figcaption>
                  </figure> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.ByLine}>
                  {this.props.selectedRecipe.byline}
                </div>
                <div className={styles.PublishedDate}>
                  <time>{this.props.selectedRecipe.sys.updatedAt}</time>
                </div>

                <p className={styles.Content}>
                  {this.props.selectedRecipe.fields
                    ? this.props.selectedRecipe.fields.description
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  selectedRecipe: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        caption: PropTypes.string
      })
    ).isRequired,
    byline: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired
  }),
  getRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    selectedRecipe: getSelectedRecipeSelector(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRecipe: actions.getRecipe,
      deselectRecipe: actions.deselectRecipe
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetails);
