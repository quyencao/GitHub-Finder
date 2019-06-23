import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const SearchUser = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      return setAlert("Please enter something...", "light");
    }

    searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search User'
          value={text}
          onChange={handleChange}
        />
        <button className='btn btn-dark btn-block'>Submit</button>
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchUser;
