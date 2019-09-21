import React, { Component } from "react";
import hexToHSL from "./../utils/colors.js";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

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

class Board extends Component {
  render() {
		badgeStyle = baseBadgeStyle;
		let bgColor = props.bgColor;
		if (typeof bgColor != "string") {
			console.log(typeof bgColor);
			bgColor = badgeStyle.backgroundColor;
		}
		badgeStyle.backgroundColor = bgColor;
		if (hexToHSL.l > 127.5) {
			badgeStyle.color = "black";
			badgeStyle.borderColor = "black";
		}
    return (
      <React.Fragment>
				<b style={badgeStyle}>#{props.name.replace(" ", "-")}</b>&nbsp;
				<span>- {props.description}</span>
			</React.Fragment>
    );
  }
}

export default DisplayBoards;
export { Board };
