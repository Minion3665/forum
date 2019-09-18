import React, { Component } from "react";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class DisplayBoards extends Component {
  render() {
    return (
      <React.Fragment>
				<b style={
				{
					color: "white",
					backgroundColor: "black",
					display: "inlineBlock",
					borderRadius: "0.25vw"
				}
				}>#All</b>&nbsp;
				<span>This is a random description</span>
			</React.Fragment>
    );
  }
}

export default DisplayBoards;
