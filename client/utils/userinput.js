import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";
import { getLabels } from "./../utils/conn.js";

let baseInputContainerStyle = {
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
baseTextAreaStyle = {
	resize: "none";
};

class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: props.type ?: "post",
			verb: (props.type != "comment") ? "to" : "on",
			to: props.to ?: "this",
			width: (props.type != "comment") ? "85vw" : "75vw",
		}
	}
	render() {
		baseInputBoxStyle.width = this.state.width;
		return (
			<React.Fragment>
				<fieldset style={baseInputBoxStyle}>
					<legend>{this.state.type} {this.state.verb} {this.state.to}</legend>
					<textarea style={baseTextAreaStyle}/>
				</fieldset>
			</React.Fragment>
		);
	}
}

export default DisplayBoards;
export { Board };
