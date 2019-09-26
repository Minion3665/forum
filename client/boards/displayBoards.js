import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";
import { getLabels } from "./../utils/conn.js";

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
	paddingBottom: "0.5vw",
	margin: "0.5vw",
	display: "block",
	position: "relative",
	width: "90%",
	height: "auto",
	textDecoration: "none",
	color: "#000000",
	borderBottom: "1px solid #000000",
	top: "0",
	left: "50%",
	transform: "translate(-50%, 0)",
};

let containerStyle = {
	position: "relative",
	border: "3px solid #000000",
	borderRadius: "1vw",
	width: "90%",
	height: "auto",
	top: "0",
	left: "50%",
	transform: "translate(-50%, 0)",
}

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
		let labels = getLabels();
		let boards = [];
		labels.forEach((label) => {
			if (label.name.startsWith("Board:")) {
				label.name = label.name.slice(5);
				boards.push(label);
			}
			
		});
		return (
			<React.Fragment>
				<div style={containerStyle}>
					<Board name="all" description="a compilation of all the posts"/>
					<Board name="off topic" description="all the posts that don't fit in the original boards they were posted in" bgColor="#ffffff" />
					{
						Object.keys(boards).map((board) => {
							return (
								<Board name={item.name} description={item.description} bgColor={item.color} />
							); // Create an instance of Board for each board in the forum
						})
					}
				</div>
			</React.Fragment>
		);
	}
}

export default DisplayBoards;
export { Board };
