import React, { Fragment } from "react";
import SearchUser from "../users/SearchUser";
import Users from "../users/Users";

const Home = () => (
  <Fragment>
    <SearchUser />
    <Users />
  </Fragment>
);

export default Home;
