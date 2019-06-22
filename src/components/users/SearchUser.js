import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchUser = ({ showClearButton, clearUsers, searchUsers, setAlert }) => {
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
      {showClearButton && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

SearchUser.propsTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired
};

export default SearchUser;
