import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./AuthForm.css";

const style = {
  margin: "5px",
  color: "white"
};
class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  handleSubmit(e) {
    console.log("AuthForm.js this.props", this.props);

    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
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
    const { email, username, password } = this.state;
    const { heading, signUp, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    });
    return (
      <div className="AuthForm">
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <div>
            <TextField
              id="email"
              name="email"
              label="email"
              onChange={this.handleChange}
              value={email}
              type="text"
            />
            <br />
            <TextField
              id="password"
              name="password"
              label="password"
              onChange={this.handleChange}
              type="password"
            />
            <br />
          </div>
          {signUp && (
            <div>
              <TextField
                id="username"
                name="username"
                label="user name"
                onChange={this.handleChange}
                value={username}
                type="text"
              />
            </div>
          )}
          <div>
            <Button
              variant="outlined"
              label="Submit"
              style={style}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
