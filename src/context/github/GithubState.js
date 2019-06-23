import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GitHubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from "../types";

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const getUser = async login => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER, payload: res.data });
  };

  const getUserRepos = async login => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{ ...state, searchUsers, clearUsers, getUser, getUserRepos }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
