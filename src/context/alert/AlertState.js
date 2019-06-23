import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = ({ children }) => {
  const initState = null;

  const [state, dispatch] = useReducer(AlertReducer, initState);

  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      removeAlert();
    }, 3000);
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
