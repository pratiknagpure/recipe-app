import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavbarBrand, Toast, ToastBody, ToastHeader } from "reactstrap";
import Loader from "../components/Loader/Loader";
import PropTypes from "prop-types";
import {
  getRecipesErrorSelector,
  getRecipesLoadingSelector,
  getSelectedRecipeSelector
} from "../reducers/selectors";

class MainContainer extends Component {
  render() {
    const { loading, error, selectedRecipe, children } = this.props;

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand style={{ color: "#fff" }}>
            Recipe App{" "}
            {selectedRecipe && selectedRecipe.section
              ? "- " + selectedRecipe.section
              : null}
          </NavbarBrand>
        </Navbar>
        {error && (
          <div className="p-3">
            <Toast>
              <ToastHeader>Error</ToastHeader>
              <ToastBody>
                Something went wrong. Please refresh and try again!
              </ToastBody>
            </Toast>
          </div>
        )}
        {loading && <Loader />}
        {children}
      </div>
    );
  }
}

MainContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any
};

const mapStateToProps = state => {
  return {
    loading: getRecipesLoadingSelector(state),
    error: getRecipesErrorSelector(state),
    selectedRecipe: getSelectedRecipeSelector(state)
  };
};

export default connect(mapStateToProps)(MainContainer);
