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
	marginBottom: "2vw",
	backgroundColor: "#bababa",
	padding: "1vw",
};
let baseTitleStyle = {
	fontSize: "3vw",
	color: "#000000",
}
let baseUserdataStyle = {
	fontSize: "2vw",
	color: "#000000",
}
let baseBodyStyle = {
	fontSize: "2vw",
	color: "#555555",
}
let basePFPImageStyle = {
	width: "3vw",
	display: "inlineBlock",
}

class Post extends Component {
	constructor(props) {
  		super(props);
	}
	render() {
		return (
			<div style={basePostStyle}>
			<img style={basePFPImageStyle} src={this.props.author_pfp}/>
			<span style={baseTitleStyle}>{this.props.title}</span>{" "}
			<span style={baseUserdataStyle}>by {this.props.author} at {this.props.timestamp}</span><br/>
			<span style={baseBodyStyle}>{this.props.body}</span>
			</div>
		);
	}
}
export default Post;
