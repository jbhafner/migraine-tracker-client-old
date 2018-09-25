import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import {
  loadHeadaches,
  removeHeadaches,
  addHeadache,
  postNewHeadache
} from "../store/actions/headaches.js";
import { withStyles } from "@material-ui/core/styles";
import { DateFormatInput, TimeFormatInput } from "material-ui-next-pickers";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./MyHeadacheNewForm.css";
import { format, parse } from "date-fns";

// console.log("postNewHeadache", postNewHeadache);

const buttonStyle = {
  margin: "5px",
  color: "blue"
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const pain = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  },
  {
    value: 6,
    label: "6"
  },
  {
    value: 7,
    label: "7"
  },
  {
    value: 8,
    label: "8"
  },
  {
    value: 9,
    label: "9"
  },
  {
    value: 10,
    label: "10"
  }
];

pain.map(function(item) {
  console.log("pain item", item);
});

// let date = {};
class NewHeadacheForm extends Component<{}, NewHeadacheForm> {
  constructor(props) {
    super(props);
    const { authUser } = this.props;
    this.state = {
      date: "",
      painLevel: 0,
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleNewHeadache = this.handleNewHeadache.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    // this.postNewHeadache = this.postNewHeadache.bind(this);
  }

  handleChange = prop => event => {
    console.log("prop", prop, "event.target.value", event.target.value);
    this.setState({ [prop]: event.target.value });
    // console.log("this.state", this.state);
  };

  // onChangeDate = (event, date) => {
  //   console.log("Date:", date);
  //   this.setState({ selectedDate: date, dateText: format(date, "MM/DD/YYYY") });
  // };

  handleNewHeadache = event => {
    console.log("event", event);
    event.preventDefault();
    console.log("postNewHeadache", postNewHeadache);
    console.log("this.state", { ...this.state });
    // console.log("this.router.history", this.router.history);

    this.props.postNewHeadache({ ...this.state });
    console.log("hello");
    // this.setState({});
    this.props.history.push("/myHeadaches/list");
  };
  handleSubmit(e) {
    console.log("AuthForm.js this.props", this.props);

    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    console.log("MyHeadacheNewForm - authType", authType);
    console.log("MyHeadacheNewForm - this.props", this.props);
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/myHeadaches/list");
      })
      .catch(() => {
        return;
      });
  }

  render() {
    return (
      <form onSubmit={this.handleNewHeadache}>
        <div>
          <h1>New Headache Form</h1>
          <TextField
            className="headacheInput"
            id="date"
            name="date"
            label="Headache Date"
            type="date"
            defaultValue="2020-01-01"
            onChange={this.handleChange("date")}
            InputLabelProps={{ shrink: true }}
          />
          <p> </p>
          <TextField
            id="painLevel"
            className="headacheInput"
            select
            label="Pain Level"
            value={this.state.painLevel}
            onChange={this.handleChange("painLevel")}
          >
            {pain.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p> </p>
          <TextField
            id="name"
            className="headacheInput"
            label="Comment"
            value={this.state.comment}
            onChange={this.handleChange("comment")}
            type="text"
            name="comment"
          />
        </div>
        <div>
          <Button
            variant="outlined"
            label="Submit"
            style={buttonStyle}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

// interface NewHeadacheForm {
//   date: Date;
// }

function mapStateToProps(state) {
  return {
    errors: state.errors,
    newHeadache: state
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { postNewHeadache }
  )(NewHeadacheForm)
);
