import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayBoards from "./boards/displayBoards.js";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <DisplayBoards/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
