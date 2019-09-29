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
	padding: "2vw",
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
	borderRadius: "3vw",
	display: "inline-block",
	paddingRight: "1vw",
}
let baseFooterStyle = {
	color: "#777777",
	fontSize: "1vw",
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
			<span style={baseBodyStyle}>{this.props.body}</span><br/>
			<span style={baseFooterStyle}>{this.props.comments.length} comments - {this.props.tags.length} tags</span>
			</div>
		);
	}
}
export default Post;
