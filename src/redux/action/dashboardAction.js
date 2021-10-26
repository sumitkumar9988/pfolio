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

    if (!file) { return }
    let myFile = file.name.split('.');
    const fileType = myFile[myFile.length - 1];

    const params = {
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: `${uuidv4()}.${fileType}`,
        Body: file,
    };
    dispatch({ type: alias.LOADING_ENABLE });

    s3.upload(params, (error, data) => {
        if (error) {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE })
            return;
        }
        dispatch({ type: alias.UPLOAD_FILE, payload: data.Location });
        dispatch({ type: alias.REMOVE_ERROR });
        dispatch({ type: alias.LOADING_DISABLE });

    });

};


export const createProfile = (input) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post('/profile', input)
        .then((res) => {
            dispatch({ type: alias.CREATE_PROFILE, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const getUserDetails = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/user')
        .then((res) => {
            dispatch({ type: alias.GET_USER, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })

};

export const updateProfile = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.patch('/profile', data)
        .then((res) => {
            dispatch({ type: alias.UPDATE_PROFILE, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const getprofile = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/profile',)
        .then((res) => {
            dispatch({ type: alias.GET_PROFILE, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};



export const addEducation = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post('/profile/education', data)
        .then((res) => {
            dispatch({ type: alias.CREATE_EDUCATION, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const getEducation = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/profile/education')
        .then((res) => {
            dispatch({ type: alias.GET_EDUCATION, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};


export const getEducationByID = (id) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/education${id}`)
        .then((res) => {
            dispatch({ type: alias.GET_EDUCATION_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const updateEducation = (id, data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/education${id}`, data)
        .then((res) => {
            dispatch({ type: alias.UPDATE_EDUCATION_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const deleteEducation = (id, data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/education${id}`, data)
        .then((res) => {
            dispatch({ type: alias.DELETE_EDUCATION_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};



// 

export const addExperience = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post('/profile/experience', data)
        .then((res) => {
            dispatch({ type: alias.CREATE_EXPERIENCE, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const getExperience = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/profile/experience')
        .then((res) => {
            dispatch({ type: alias.GET_EXPERIENCE, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};


export const getExperienceByID = (id) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/experience/${id}`)
        .then((res) => {
            dispatch({ type: alias.GET_EXPERIENCE_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const updateExperience = (id, data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/experience/${id}`, data)
        .then((res) => {
            dispatch({ type: alias.UPDATE_EXPERIENCE_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const deleteExperience = (id, data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/experience/${id}`, data)
        .then((res) => {
            dispatch({ type: alias.DELETE_EXPERIENCE_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

// 

export const getProject = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/profile/project')
        .then((res) => {
            dispatch({ type: alias.GET_PROJECT, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const addProject = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post('/profile/project', data)
        .then((res) => {
            dispatch({ type: alias.CREATE_PROJECT, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const resfreshProject = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get('/profile/project/refesh')
        .then((res) => {
            dispatch({ type: alias.REFRESH_PROJECT, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};


export const getProjectByID = (id) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/project/${id}`)
        .then((res) => {
            dispatch({ type: alias.GET_PROJECT_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const updateproject = (id, data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.patch(`/profile/project/${id}`, data)
        .then((res) => {
            dispatch({ type: alias.UPDATE_PROJECT_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const deleteProject = (id) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.delete(`/profile/project/${id}`)
        .then((res) => {
            dispatch({ type: alias.DELETE_PROJECT_BY_ID, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};
export const getSkills = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/skills/`)
        .then((res) => {
            dispatch({ type: alias.GET_SKILLS, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};


export const addSkillls = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post(`/profile/skills/`, data)
        .then((res) => {
            dispatch({ type: alias.ADD_SKILLS, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};


export const deleteSkills = (id) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.delete(`/profile/skills/${id}`)
        .then((res) => {
            dispatch({ type: alias.DELETE_SKILLS, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const getAnaltics = () => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.get(`/profile/analtics`)
        .then((res) => {
            dispatch({ type: alias.GET_ANALTICS, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
            dispatch({ type: alias.LOADING_DISABLE });
        })
};

export const gitHubCallBack = (data) => async (dispatch) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios.post(`/github/callback`, data)
        .then((res) => {
            dispatch({ type: alias.GITHUB_CALLBACK, payload: res.data });
            dispatch({ type: alias.LOADING_DISABLE });
        })
        .catch((error) => {
            dispatch({ type: alias.ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
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
