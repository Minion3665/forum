import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
});

cookie.get("gh-token")
cookie.set("gh-token", result.token, { path: "/", maxAge: 604800000 });
cookie.remove("gh-token")
