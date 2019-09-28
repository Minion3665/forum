import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";
import { getLabels } from "./../utils/conn.js";

let base404Style = {
	position: "relative",
	border: "3px solid #000000",
	borderRadius: "1vw",
	width: "90%",
	height: "auto",
	top: "0",
	left: "50%",
	transform: "translate(-50%, 0)",
	textAlign: "center",
	marginBottom: "2vw",
};
let base404ImageStyle = {
	width: "50%",
	height: "auto",
}

class BoardPosts extends Component {
	constructor(props) {
  		super(props);
	}
	render() {
		let board = this.props.match.params.board;
		let boardLabel = null;
		let labels = getLabels();
		if (this.props.match.params.board == "all") {
			// This is for all posts so the boardLabel will be none
		} else if (this.props.match.params.board == "off-topic") {
			// This is for off-topic posts. Do stuff here
		} else {
			/*labels.forEach((label) => {
				if (label.name.startsWith("Board:")) {
					label.name = label.name.slice(6);
					if (label.name && encodeURI(label.name.replace(" ", "-")) == board) {
						boardLabel = label;
					}
				}
			});
			if (!boardLabel) {
				return (
					<div style={base404Style}>
						<img src="/images/404.gif" style={base404ImageStyle}/>
						<h2>This board wasn't found anywhere... perhaps you should <Link to="/">go back home</Link></h2>
					</div>
				);
			}
		}*/
		getPosts().then((res) => {
			console.log(res);
		})
		//let labels = getPosts(boardLabel);
		return (
			<React.Fragment>
				This is a board... And that means nothing yet
			</React.Fragment>
		);
	}
}
export default BoardPosts;
