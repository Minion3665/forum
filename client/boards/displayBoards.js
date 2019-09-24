import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";

let baseBadgeStyle = {
	color: "#ffffff",
	backgroundColor: "#000000",
	border: "1px solid",
	borderColor: "#ffffff",
	display: "inlineBlock",
	borderRadius: "0.5vw",
	padding: "0.25vw",
	display: "inline-block",
	width: "auto",
	height: "auto",
};

let baseBoardStyle = {
	margin: "0.5vw",
	display: "block",
	width: "auto",
	height: "auto",
	textDecoration: "none",
	color: "#000000",
};

function Board (props) {
	let badgeStyle = baseBadgeStyle;
	let bgColor = props.bgColor;
	if (typeof bgColor != "string") {
		bgColor = badgeStyle.backgroundColor;
	}
	badgeStyle.backgroundColor = bgColor;
	console.log(hexToHSL(bgColor).l);
	if (hexToHSL(bgColor).l > 0.5) {
		badgeStyle.color = "#000000";
		badgeStyle.borderColor = "#000000";
	}
	console.log(hexToHSL(bgColor).l);
	let boardName = props.name.replace(" ", "-");
	return (
		<React.Fragment>
			<Router>
				<Link to={"/board/"+boardName} style={baseBoardStyle}>
					<b style={badgeStyle}>#{boardName}</b>&nbsp;
					<span>- {props.description}</span>
				</Link>
			</Router>
		</React.Fragment>
	);
}

class DisplayBoards extends Component {
	render() {
		return (
			<React.Fragment>
				<Board name="all" description="a compilation of all the posts"/>
				<Board name="off topic" description="all the posts that don't fit in the original boards they were posted in" bgColor="#ffffff" />
			</React.Fragment>
		);
	}
}

export default DisplayBoards;
export { Board };
