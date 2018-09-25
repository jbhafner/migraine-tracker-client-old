import React, { Component } from "react";
import { Link } from "react-router-dom";
// import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import "./NAVBar.css";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//     margin: "5px"
//   }
// });

const style = {
  margin: "5px",
  color: "white"
};

class NAVBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      show: null
    };
  }

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="App">
        <AppBar style={{ position: "fixed", top: 0 }} title="Migraine Tracker">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Migraine Tracker
            </Typography>
            {this.props.currentUser.isAuthenticated ? (
              <div className="buttons">
                <p>User: {this.props.currentUser.user.username}</p>
                <Button
                  onClick={this.logout}
                  component={Link}
                  to="/signin"
                  variant="outlined"
                  style={style}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="buttons">
                <Button
                  component={Link}
                  to="/signin"
                  variant="outlined"
                  style={style}
                >
                  Log In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="outlined"
                  style={style}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
} // close class NAVBar extends Compoent

function mapStateToProps(state) {
  return {
    open: state.open,
    show: state.show,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(NAVBar);
