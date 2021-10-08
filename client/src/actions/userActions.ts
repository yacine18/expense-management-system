import axios from "axios";
import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  GET_USER,
  GET_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_ERROR,
  USER_SIGNOUT,
} from "../constants/userConstant";

export const register =
  (name: any, email: any, password: any) => async (dispatch: any) => {
    try {
      const { data } = await axios.post(
        "https://expense-system-management.herokuapp.com/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      dispatch({
        type: REGISTER_USER,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const login = (email: any, password: any) => async (dispatch: any) => {
  try {
    const { data } = await axios.post("https://expense-system-management.herokuapp.com/api/users/login", {
      email,
      password,
    });
    dispatch({
      type: SIGNIN_USER,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error: any) {
    dispatch({
      type: SIGNIN_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userDetails =
  (id: any) => async (dispatch: any, getState: any) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get(
        `https://expense-system-management.herokuapp.com/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_USER_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const forgetPassword = (email: any) => async (dispatch: any) => {
  try {
    const { data } = await axios.post("/api/users/forget-password", { email });
    dispatch({
      type: FORGET_PASSWORD,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: FORGET_PASSWORD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch: any) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};

export const passwordReset = (password: string) => async (dispatch: any) => {
  try {
    const { data } = await axios.post("/api/users/reset-password", password);
    dispatch({
      type: RESET_PASSWORD,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: RESET_PASSWORD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
