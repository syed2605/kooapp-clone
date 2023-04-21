import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

import axios from "axios";

const json_URL = `https://vast-colt-shoulder-pads.cyclic.app/loggedUser`;
let initData = { isAuth: false, token: "", isLoading: false, isError: false };

const getInitialState = async () => {
  let res = await axios.get(json_URL);
  res = res.data;
  initData = { ...initData, ...res };
};

getInitialState();

const initialState = initData;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        ...payload,
      };

    default:
      return state;
  }
};

export { reducer };
