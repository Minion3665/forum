import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer '+cookie.get("gh-token"),
  },
});

const GET_ORGANIZATION = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

function refreshToken() {
  cookie.set("gh-token", cookie.get("gh-token"), { path: "/", maxAge: 604800000 });
}

function logout() {
  cookie.remove("gh-token")
}

function getOrg() {
	axiosGitHubGraphQL
		.post('', { query: GET_ORGANIZATION })
		.then(result => console.log(result));
}

function getLabels() { // Get all labels in the forum
	axiosGitHubGraphQL
		.post('', { query: GET_ORGANIZATION })
		.then(result => console.log(result));
  return [
    {name: "Board:General", description: "just general posts", color: "#aa0000"},
    {name: "Board:Casual-Coding", description: "but also casual coding yes", color: "#aa0000"},
    {name: "Board:Casual Coding", description: "just general posts", color: "#9000ff"},
    {name: "Board:Coding Help", description: "just general posts", color: "#18d600"},
    {name: "Board:Minion3665's Testing", description: "just general posts", color: "#aa0000"},
    {name: "Board:Random", description: "just general posts", color: "#ffff00"},
    {name: "Moderation:OffTopic", description: "just general posts", color: "#1affff"},
    {name: "just a random pointless label to screw stuff up", description: "just general posts", color: "#aa0000"},
  ]; // This returns a fake result for now, as I can't be bothered to do graphql until later
}

export { getLabels };
