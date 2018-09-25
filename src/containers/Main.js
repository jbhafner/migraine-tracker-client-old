import React from "react";
// import { Route, Redirect } from "react-router";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "../reducers/rootReducer";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Backdrop } from "@material-ui/core";
import Home from "../components/Home";
import Test from "../components/Test";
import DataView from "../components/DataView";
import AuthForm from "../components/AuthForm";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block"
};

const Main = props => {
  const {
    classes,
    authUser,
    errors,
    removeError,
    currentUser,
    myHeadaches
  } = props;

  return (
    <Paper style={paperStyle}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser.isAuthenticated ? (
                <Redirect to="/myHeadaches" />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/myHeadaches" render={props => <DataView />} />
          <Route exact path="/test" render={props => <Test />} />
          <Route
            exact
            path="/signin"
            render={props => (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back!"
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Migraine Tracker today."
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    content: state.content
  };
}

// Main.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
