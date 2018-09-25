import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Main from "./Main";
import NAVBar from "../components/NAVBar";
import { SET_CURRENT_USER } from "../store/actionCreators";

import "./App.css";
console.log("App.js/ Main", Main);
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
// import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

const store = configureStore();

if (localStorage.jwtTokenMT) {
  setAuthorizationToken(localStorage.jwtTokenMT);
  // prevent someone from manually tampering with the key of jwtTokenMT in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtTokenMT)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}
console.log("App.js/store", store);
console.log("App.js/getState", store.getState());
// const theme = createMuiTheme({
//   palette: {
//     primary1Color: "#3F51B5",
//     accent1Color: "#2196F3"
//   }
// });

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <NAVBar />
          <Main />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
