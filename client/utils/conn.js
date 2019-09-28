import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer '+cookie.get("gh-token"),
  },
});

const owner = "minion3665"
const repo = "forum"

const GET_LABELS = `{
	repository(owner:${owner}, name:${repo}) {
		labels(first:100) {
			edges {
				node {
					name,
					description,
					color
				}
			}
		}
	}
}`;

function refreshToken() {
  cookie.set("gh-token", cookie.get("gh-token"), { path: "/", maxAge: 604800000 });
}

function logout() {
  cookie.remove("gh-token")
}

function getLabels() { // Get all labels in the forum
	return axiosGitHubGraphQL
	.post('', { query: GET_LABELS })
	.then((response) => {
		let labels = [];
		response.data.data.repository.labels.edges.forEach((label) => {
			labels.push(label.node);
		});
		return labels;
	});
}

export { getLabels };
