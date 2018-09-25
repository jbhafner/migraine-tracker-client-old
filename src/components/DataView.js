import React, { Component } from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import "./DataView.css";
import MyHeadacheList from "./MyHeadacheList";
import MyHeadacheNewForm from "./MyHeadacheNewForm";
import { authUser } from "../store/actions/auth";
import { fetchHeadaches, removeHeadache } from "../store/actions/headaches.js";
// import { getAllHeadaches } from "../store/actionCreators.js";

const style = {
  margin: "5px",
  color: "blue"
};

class DataView extends Component {
  constructor(props) {
    super(props);
    this.updateHeadaches = this.updateHeadaches.bind(this);
  }

  componentDidMount() {
    let id = this.props.id;
    console.log("id", id);
    console.log("this.props.fetchHeadaches", this.props.fetchHeadaches);
    this.props.fetchHeadaches(id);
  }

  async updateHeadaches(user_id) {
    console.log("updateHeadaches called");
    let headacheArray = await [];
    console.log("this.props.fetchHeadaches", this.props.fetchHeadaches);
    await this.props.fetchHeadaches();
  }

  render() {
    return (
      <div className="HeadacheView">
        <div className="listButtons">
          <Button
            component={Link}
            to="/myHeadaches/list"
            variant="outlined"
            style={style}
            onClick={function() {
              console.log("Headache List clicked");
            }}
          >
            Headache List
          </Button>
          <Button
            component={Link}
            to="/myHeadaches/new"
            variant="outlined"
            style={style}
          >
            New Headache
          </Button>
        </div>

        <div>
          <Switch>
            <Route
              exact
              path="/myHeadaches/list"
              component={props => (
                <MyHeadacheList
                  id={this.props.id}
                  {...props}
                  removeHeadache={this.props.removeHeadache}
                />
              )}
            />
            <Route
              exact
              path="/myHeadaches/new"
              render={props => <MyHeadacheNewForm onAuth={authUser} />}
              history={this.props.history}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myHeadaches: state.headaches.myHeadaches,
    id: state.currentUser.user.id
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, fetchHeadaches, removeHeadache }
  )(DataView)
);
