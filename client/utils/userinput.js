import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";
import { getLabels } from "./../utils/conn.js";

let baseInputContainerStyle = {
	position: "relative",
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
let baseTextAreaStyle = {
	resize: "none",
	width: "100%",
};

class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: (props.type) ? props.type : "post",
			verb: (props.type != "comment") ? "to" : "on",
			to: (props.to) ? props.to : "this",
			width: (props.type != "comment") ? "85vw" : "75vw",
		}
	}
	render() {
		baseInputContainerStyle.width = this.state.width;
		return (
			<React.Fragment>
				<div style={baseInputContainerStyle}>
					<span>{this.state.type.toUpperCase()} {this.state.verb.toUpperCase()} {this.state.to.toUpperCase()}</span>
					<textarea style={baseTextAreaStyle}/>
				</div>
			</React.Fragment>
		);
	}
}

export default UserInput;
