import axios from 'axios'
import * as alias from './../constant'
import { api } from './../../utils/url'
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

axios.defaults.baseURL = api;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;

const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const uploadFile = (file) => async (dispatch) => {

    if (!file) {
        return;
    }
    let myFile = file.name.split('.');
    const fileType = myFile[myFile.length - 1];

    const params = {
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: `${uuidv4()}.${fileType}`,
        Body: file,
    };
    dispatch({
        type: alias.LOADING_ENABLE,
    });

    s3.upload(params, (error, data) => {
        if (error) {
            dispatch({
                type: alias.ERROR,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            dispatch({
                type: alias.LOADING_DISABLE
            })
            return;
        }
        dispatch({
            type: 'DUMMY',
            payload: data.Location
        });
        dispatch({
            type: alias.REMOVE_ERROR,
        });
        dispatch({
            type: alias.LOADING_DISABLE,
        });

    });

};




export const createProfile = (input) => async (dispatch) => {
    dispatch({type: alias.LOADING_ENABLE});
    axios.post('/profile',input)
        .then((res) => {
            console.log(res)
            dispatch({
                type: alias.CREATE_PROFILE,
                payload: res.data
            });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: alias.ERROR,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};



export const getUserDetails = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/user')
        .then((res) => {
            dispatch({
                type: alias.GET_USER,
                payload: res.data
            });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({
                type: alias.ERROR,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            dispatch({ type: alias.LOADING_DISABLE });
        })

};


















// export const actionName = (input) => async (dispatch) => {
//     axios.get('', JSON.parse(input))
//         .then((res) => {
//             dispatch({
//                 type: 'DUMMY',
//                 payload: res.data
//             });
//             dispatch({
//                 type: REMOVE_ERROR,
//             });
//         })
//         .catch((error) => {
//             dispatch({
//                 type: ERROR,
//                 payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//             });
//         })
//         .finally(() => {
//             dispatch({
//                 type: LOADING_DISABLE,
//             });
//         });

// };
