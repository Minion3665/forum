import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayBoards from "./boards/displayBoards.js";
import BoardPosts from "./posts/boards.js";
import { setToken } from "./utils/conn.js";
import querySearch from "stringquery";
import axios from "axios";
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
					<Route exact path="/" render={() => {null}}/>
					<Route path="/board/:board" component={BoardPosts}/>
				</Switch>
				<Switch>
					<Route path="/login/callback" component={Authentication}/>
					<Route component={DisplayBoards}/>
				</Switch>
			</Router>
		);
	}
}

class Authentication extends Component {
	render() {
		let ghCode = querySearch(this.props.location.search).code;
		axios.create({
			baseURL: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
		}).post('', {
			client_id: "9e99d8b63b9a74c6c3a4",
			client_secret: "65209c048eca0255f770c84de322ba0a9d59055f",
			code: ghCode
		}).then((response) => {
			let res = querySearch(response.data);
			let res = response.data;
			if (res.error) {
				console.log(res.error);
				//window.location.href = "https://github.com/login/oauth/authorize?client_id=9e99d8b63b9a74c6c3a4&scope=repo,user";
			} else {
				setToken(res.access_token);
				console.log(res.access_token);
				//window.location.href = "/";
			}
		}).catch((error) => {
			console.log({errortext: "Failed to get response from github", error: error});
			//window.location.href = "https://github.com/login/oauth/authorize?client_id=9e99d8b63b9a74c6c3a4&scope=repo,user";
		});
		return null;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
