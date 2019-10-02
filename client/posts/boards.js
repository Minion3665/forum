import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import hexToHSL from "./../utils/colors.js";
import { getLabels, getPosts } from "./../utils/conn.js";
import Post from "./post.js";

let base404Style = {
	position: "relative",
	border: "3px solid #000000",
	borderRadius: "1vw",
	width: "90%",
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

class BoardPosts extends Component {
	constructor(props) {
  		super(props);
		this.state = {posts: null};
	}
	componentDidMount() {
		getPosts().then((res) => {
			let posts = [];
			res.data.data.repository.issues.edges.forEach((issue) => {
				if (issue.node.title.startsWith("Board:"+this.props.match.params.board+" ")) {
					posts.unshift({
						title: issue.node.title,
						content: issue.node.bodyHTML,
						locked: issue.node.locked,
						timestamp: issue.node.createdAt,
						comments: issue.node.comments.edges,
						tags: issue.node.labels.edges,
						author: issue.node.author.login,
						author_pfp: issue.node.author.avatarUrl,
					});
				}
			});
			this.setState({posts: posts});
		});
	}
	render() {
		let board = this.props.match.params.board;
		let boardLabel = null;
		//let labels = getLabels();
		//if (this.props.match.params.board == "all") {
			// This is for all posts so the boardLabel will be none
		//} else if (this.props.match.params.board == "off-topic") {
			// This is for off-topic posts. Do stuff here
		//} else {
			/*labels.forEach((label) => {
				if (label.name.startsWith("Board:")) {
					label.name = label.name.slice(6);
					if (label.name && encodeURI(label.name.replace(" ", "-")) == board) {
						boardLabel = label;
					}
				}
			});
			if (!boardLabel) {
				return (
					<div style={base404Style}>
						<img src="/images/404.gif" style={base404ImageStyle}/>
						<h2>This board wasn't found anywhere... perhaps you should <Link to="/">go back home</Link></h2>
					</div>
				);
			}
		}*/
		//let labels = getPosts(boardLabel);
		let posts = this.state.posts;
		if (!posts) {
			return null;
		} else {
			return (
				<React.Fragment>
					{
						Object.keys(posts).map((id) => {
							let post = posts[id];
							return (
								<Post
									author={post.author}
									author_pfp={post.author_pfp}
									title={post.title}
									body={post.content}
									timestamp={post.timestamp}
									comments={post.comments}
									tags={post.tags}
									locked={post.locked}
								/>
							);
						})
					}
				</React.Fragment>
			);
		}
	}
}
export default BoardPosts;
