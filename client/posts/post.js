import React, { Component } from "react";

let basePostStyle = {
	position: "relative",
	borderLeft: "2vw solid #000000",
	boxSizing: "borderBox",
	width: "85%",
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

class Post extends Component {
	constructor(props) {
  	super(props);
	}
	render() {
		return() (
			<div style={basePostStyle}>This is a post... and that means nothing yet</div>
		);
	}
}
export default Post;
