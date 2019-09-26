import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayBoards from "./boards/displayBoards.js";
import BoardPosts from "./boards/displayBoards.js";
//import UserPosts from "./boards/displayBoards.js";

let buildNumber = 0.26;

console.log(
  "Welcome to the forum. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/board/:board" component={BoardPosts}/>
          //<Route path="/user/:user" component={User}/>
        </Switch>
        <DisplayBoards/>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
