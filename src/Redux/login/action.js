import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

const json_URL = `https://vast-colt-shoulder-pads.cyclic.app/loggedUser`;

const setLogin = (payload) => {
  return (dispatch) => {
    dispatch(login_request());

    axios
      .post(json_URL, payload)
      .then((res) => {
        dispatch(login_success(res.data));
      })
      .catch(() => {
        dispatch(login_failure());
      });
  };
};

const login_request = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const login_success = (bool) => {
  return {
    type: LOGIN_SUCCESS,
    payload: bool,
  };
};

const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const log_out = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};

export { setLogin, log_out };
