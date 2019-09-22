import React, { Component } from "react";
import hexToHSL from "./../utils/colors.js";

let baseBadgeStyle = {
	color: "#ffffff",
	backgroundColor: "#000000",
	border: "1px solid",
	borderColor: "#ffffff",
	display: "inlineBlock",
	borderRadius: "0.25vw",
	padding: "0.25vw",
	display: "inline-block",
	width: "auto",
	height: "auto",
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
	return (
		<React.Fragment>
			<b style={badgeStyle}>#{props.name.replace(" ", "-")}</b>&nbsp;
			<span>- {props.description}</span>
		</React.Fragment>
	);
}

class DisplayBoards extends Component {
  render() {
    return (
			<React.Fragment>
				<Board name="all" description="a compilation of all the posts"/><br/>
				<Board name="off topic" description="all the posts that don't fit in the original boards they were posted in" bgColor="#ffffff" />
			</React.Fragment>
    );
  }
}

export default DisplayBoards;
export { Board };
