import {
  REGISTER_USER,
  REGISTER_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_ERROR,
  USER_SIGNOUT,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  GET_USER,
  GET_USER_ERROR,
} from "../constants/userConstant";

export const userRegisterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case REGISTER_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case SIGNIN_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_SIGNOUT:
      return {};

    default:
      return state;
  }
};

export const detailsUserReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        loading: false,
        user: action.payload,
      };

    case GET_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const passwordForgetReducer = (state = {}, action: any) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      return {
        loading: false,
      };

    case FORGET_PASSWORD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action: any) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        loading: false,
      };

    case RESET_PASSWORD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
