import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

Alert.propsTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
