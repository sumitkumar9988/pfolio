import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ALL_USER_DETAILS_REQUEST,
  GET_ALL_USER_DETAILS_SUCCESS,
  GET_ALL_USER_DETAILS_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCESS,
  UPDATE_PROFILE_FAILURE,
} from '../constant';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const signupReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { loading: true };
    case SIGNUP_SUCCESS:
      return { loading: false, success: true };
    case SIGNUP_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = { data: { user: {} } }, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case CHANGE_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const forgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return { loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case FORGET_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case RESET_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserReducer = (state = { data: { user: {} } }, action) => {
  switch (action.type) {
    case GET_ALL_USER_DETAILS_REQUEST:
      return { loading: true };
    case GET_ALL_USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload.data.user };
    case GET_ALL_USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProfileReducer = (state = { data: { user: {} } }, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { loading: true };
    case GET_PROFILE_SUCESS:
      return { loading: false, profile: action.payload };
    case GET_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_PROFILE_SUCESS:
      return { loading: false, success: action.payload.message };
    case UPDATE_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


