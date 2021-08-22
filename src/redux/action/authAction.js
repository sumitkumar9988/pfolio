import axios from 'axios';
import { baseURL } from './../../utils/url';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  GET_ALL_USER_DETAILS_REQUEST,
  GET_ALL_USER_DETAILS_SUCCESS,
  GET_ALL_USER_DETAILS_FAILURE,
  UPDATE_DETAILS_REQUEST,
  UPDATE_DETAILS_SUCCESS,
  UPDATE_DETAILS_FAILURE,
  UPDATE_SOCIAL_ACCOUNT_REQUEST,
  UPDATE_SOCIAL_ACCOUNT_SUCCESS,
  UPDATE_SOCIAL_ACCOUNT_FAIL,
} from './../constant';

export const userLogin = (input, path = 'login') => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    let { data } = await axios.post(`${baseURL}/${path}`, input);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('token', JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userSignup = (input, path = 'signup') => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    console.log(baseURL)
    let { data } = await axios.post(`${baseURL}/${path}`, input);
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('token', JSON.stringify(data.token));
  } catch (error) {
      console.log(error);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const changePassword = (input) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_PASSWORD_REQUEST });
  try {
    const {
      userLogin: { token },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };


    const { data } = await axios.post(`${baseURL}/changepassword`, input, config);

    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const resetPasswords = (input, id) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${baseURL}/resetPassword/${id}`, input, config);

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: true,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const forgetPassword = (input) => async (dispatch) => {
  dispatch({ type: FORGET_PASSWORD_REQUEST });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${baseURL}/forgetpassword`, input, config);
    dispatch({
      type: FORGET_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGET_PASSWORD_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userProfile = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_USER_DETAILS_REQUEST });
  try {
    const {
      userLogin: { token },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${baseURL}/`, config);

    dispatch({
      type: GET_ALL_USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_DETAILS_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateProfileAction = (input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_DETAILS_REQUEST });
  try {
    const {
      userLogin: { token },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.patch(`${baseURL}/`, input, config);

    dispatch({
      type: UPDATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_DETAILS_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateSocialProfileAction = (input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_SOCIAL_ACCOUNT_REQUEST });
  try {
    const {
      userLogin: { token },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch(`${baseURL}/social`, input, config);

    dispatch({
      type: UPDATE_SOCIAL_ACCOUNT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SOCIAL_ACCOUNT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  document.location.href = '/';
};
