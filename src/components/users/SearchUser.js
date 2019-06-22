import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchUser extends Component {
  state = {
    text: ""
  };

  static propsTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      return this.props.setAlert("Please enter something...", "light");
    }

    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { showClearButton, clearUsers } = this.props;

    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search User'
            value={this.state.text}
            onChange={this.handleChange}
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
  }
}

export default SearchUser;
