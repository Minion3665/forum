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

function uppercaseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bodyValue: "",
			type: (props.type) ? props.type : "post",
			verb: (props.type != "comment") ? "to" : "on",
			to: (props.to) ? props.to : "this",
			onsubmit: (props.onsubmit) ? props.onsubmit : void(0),
			width: (props.type != "comment") ? "85vw" : "75vw",
			transform: (props.type != "comment") ? "translate(-50%, 0)" : "translate(-45%, 0)",
		}
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleBodyChange(event) {
		this.setState({bodyValue: event.target.value});
	}
	handleSubmit(event) {
		this.state.onsubmit("A "+this.state.type, this.state.bodyValue);
		event.preventDefault();
	}
	render() {
		baseInputContainerStyle.width = this.state.width;
		baseInputContainerStyle.transform = this.state.transform;
		return (
			<React.Fragment>
				<div style={baseInputContainerStyle}>
					<form onsubmit={this.handleSubmit}>
						<span>{uppercaseFirstLetter(this.state.type)} {this.state.verb} {this.state.to.toLowerCase()}</span>
						<textarea value={this.state.bodyValue} onChange={this.handleBodyChange} style={baseTextAreaStyle}/>
						<button type="reset">Clear</button>{" "}
						<button type="submit">{uppercaseFirstLetter(this.state.type)}!</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default UserInput;
