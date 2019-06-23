import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = props => {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem {...user} key={user.id} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
