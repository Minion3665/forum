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
		labels.forEach((label) => {
			if (label.name.startsWith("Board:")) {
				label.name = label.name.slice(6);
				if (label.name && encodeURI(label.name.replace(" ", "-")) == board) {
					boardLabel = label;
				}
			}
		});
		if (true) {//(!boardLabel) {
			return (
				<div style={base404Style}>
					<img src="/images/404.gif" style={base404ImageStyle}/>
					<h2>This board wasn't found anywhere... perhaps you should <Link to="/">go back home</Link></h2>
				</div>
			);
		}
		//let labels = getPosts(boardLabel);
		return (
			<React.Fragment>
				<div style={containerStyle}>
					<Board name="all" description="a compilation of all the posts"/>
					<Board name="off topic" description="all the posts that don't fit in the original boards they were posted in" bgColor="#ffffff" />
					{
						Object.keys(posts).map((id) => {
							let board = boards[id];
							return (
								<Board name={board.name} description={board.description} bgColor={board.color} />
							); // Create an instance of Board for each board in the forum
						})
					}
				</div>
			</React.Fragment>
		);
	}
}
export default BoardPosts;
