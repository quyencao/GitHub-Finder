import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url, html_url }) => (
  <div className='card text-center'>
    <img
      src={avatar_url}
      alt=''
      className='round-img'
      style={{ width: "60px" }}
    />
    <h3>{login}</h3>
    <div>
      <Link className='btn btn-dark btn-sm my-1s' to={`/user/${login}`}>
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserItem;
