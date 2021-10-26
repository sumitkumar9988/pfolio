import axios from 'axios';
import { baseURL, profileURL } from '../../utils/url';
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
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCESS,
  UPDATE_PROFILE_FAILURE,
} from '../constant';

export const userLogin = (input, path = 'login') => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    let { data } = await axios.post(`${baseURL}/${path}`, input);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
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
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userChangePassword = (input) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_PASSWORD_REQUEST });
  try {
    const { login: { user } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user}`,
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
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userResetPassword = (input, id) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${baseURL}/resetPassword/${id}`, input, config);
    console.log(data)

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: true,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userforgetPassword = (input) => async (dispatch) => {
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

export const getUserProfileAction = () => async (dispatch, getState) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { login: { user } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`${profileURL}/`, config);
    console.log(data)
    dispatch({
      type: GET_PROFILE_SUCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error");
    
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
    console.log(error.response.status);
    if(error.response.status===404){
      document.location.href = '/home/Get-started'
    }
  }
};

export const updateProfileAction = (input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { login: { user } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.patch(`${profileURL}/`, input, config);

    dispatch({
      type: UPDATE_PROFILE_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  document.location.href = '/';
};
