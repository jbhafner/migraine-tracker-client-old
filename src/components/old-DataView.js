import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";

const style = {
  margin: "5px",
  color: "white"
};

class DataView extends Component {
  render() {
    return (
      <div className="HeadacheView">
        <AppBar style={{ position: "fixed", top: 0 }} title="My Headaches List">
          <Toolbar>
            <Typography variant="title" color="inherit">
              List View
            </Typography>
            <div className="listButtons">
              <Button
                component={Link}
                to="/myHeadaches/list"
                variant="outlined"
                style={style}
              >
                Headache List
              </Button>
              <Button
                component={Link}
                to="/myHeadaches/new"
                variant="outlined"
                style={style}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default DataView;
