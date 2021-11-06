import axios from "axios";
import * as alias from "./../constant";
import { api } from "./../../utils/url";
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");

axios.defaults.baseURL = api;
// axios.defaults.headers.common['Content-Type'] = 'application/json';

// const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
// console.log(user);
// const token = user ? user.token : null;
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

const getHeader = (getState) => {
  const {
    login: { user },
  } = getState();
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };
};

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const uploadFile = (file, setPhoto) => async (dispatch) => {
  if (!file) {
    return;
  }
  let myFile = file.name.split(".");
  const fileType = myFile[myFile.length - 1];
  const params = {
    Bucket: process.env.REACT_APP_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: file,
  };
  dispatch({ type: alias.LOADING_ENABLE });

  s3.upload(params, (error, data) => {
    if (error) {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
      return;
    }
    dispatch({ type: alias.UPLOAD_FILE, payload: data.Location });
    setPhoto(data.Location);
    dispatch({ type: alias.REMOVE_ERROR });
    dispatch({ type: alias.LOADING_DISABLE });
  });
};

export const createProfile =
  (input, history, route = null) =>
  async (dispatch, getState) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios
      .post("/profile", input, getHeader(getState))
      .then((res) => {
        dispatch({ type: alias.CREATE_PROFILE, payload: res.data });
        dispatch({ type: alias.LOADING_DISABLE });
        route && history.push(route);
      })

      .catch((error) => {
        dispatch({
          type: alias.ERROR,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
        dispatch({ type: alias.LOADING_DISABLE });
      });
  };

export const getUserDetails = () => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get("/user", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_USER, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const updateProfile =
  (data, history, path = null) =>
  async (dispatch, getState) => {
    dispatch({ type: alias.LOADING_ENABLE });
    axios
      .patch("/profile", data, getHeader(getState))
      .then((res) => {
        dispatch({ type: alias.UPDATE_PROFILE, payload: res.data });
        dispatch({ type: alias.LOADING_DISABLE });
        if (path) {
          history.push(path);
        }
      })
      .catch((error) => {
        dispatch({
          type: alias.ERROR,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
        dispatch({ type: alias.LOADING_DISABLE });
      });
  };

export const getprofile = () => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get("/profile", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_PROFILE, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
      if (error && error.response && error.response.status === 404) {
        document.location.href = "/home/Get-started";
      }
    });
};

export const addEducation = (data,history,path=null,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post("/profile/education", data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.CREATE_EDUCATION, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      toast.success('New Education Add Succuss !');
      path && history.push(path) ;
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const getEducation = () => async (dispatch, getState) => {
  axios
    .get("/profile/education", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_EDUCATION, payload: res.data });
      
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const getEducationByID = (id) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get(`/profile/education/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_EDUCATION_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const updateEducation = (id, data,history,path=null,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .patch(`/profile/education/${id}`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.UPDATE_EDUCATION_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      path && history.push(path);
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const deleteEducation = (id, history,path=null) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .delete(`/profile/education/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.DELETE_EDUCATION_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      path && history.push(path);
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

//

export const addExperience = (data,history,path=null,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post("/profile/experience", data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.CREATE_EXPERIENCE, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      toast.success('New Experience Add Succuss !');
      path && history.push(path) ;
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const getExperience = () => async (dispatch, getState) => {
  axios
    .get("/profile/experience", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_EXPERIENCE, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const getExperienceByID = (id) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get(`/profile/experience/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_EXPERIENCE_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const updateExperience = (id, data,history,path=null,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  console.log("data",data);
  axios
    .patch(`/profile/experience/${id}`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.UPDATE_EXPERIENCE_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      path && history.push(path);
      toast.success('Experience Update Succussfully!')
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const deleteExperience = (id, history,path=null,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .delete(`/profile/experience/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.DELETE_EXPERIENCE_BY_ID, payload: res.data });
      toast.success('Experience delete succussfully !')
      dispatch({ type: alias.LOADING_DISABLE });
      path && history.push(path);
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

//

export const getProject = () => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get("/profile/project", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_PROJECT, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const addProject = (data) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post("/profile/project", data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.CREATE_PROJECT, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const resfreshProject = () => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get("/profile/project/refesh", getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.REFRESH_PROJECT, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const getProjectByID = (id) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get(`/profile/project/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_PROJECT_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const updateproject = (id, data) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .patch(`/profile/project/${id}`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.UPDATE_PROJECT_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const deleteProject = (id) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .delete(`/profile/project/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.DELETE_PROJECT_BY_ID, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};
export const getSkills = () => async (dispatch, getState) => {
  axios
    .get(`/profile/skills/`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_SKILLS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const getSkillbyID = (id) => async (dispatch, getState) => {
  axios
    .get(`/profile/skills/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_SKILL_BY_ID, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const addSkills = (data,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post(`/profile/skills/`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.ADD_SKILLS, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      toast.success('Skill Add succussfully!')
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const deleteSkills = (id) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .delete(`/profile/skills/${id}`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.DELETE_SKILLS, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const getAnaltics = () => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .get(`/profile/analtics`, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GET_ANALTICS, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const gitHubCallBack = (data,toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post(`/profile/github/callback`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.GITHUB_CALLBACK, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      dispatch(resfreshProject());
      toast.success('GitHub Username Update Successfully! ')
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      console.log(error)
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

export const updateDomain = (data, toast) => async (dispatch, getState) => {
  dispatch({ type: alias.LOADING_ENABLE });
  axios
    .post(`/profile/update-domain`, data, getHeader(getState))
    .then((res) => {
      dispatch({ type: alias.UPDATE_DOMAIN, payload: res.data });
      dispatch({ type: alias.LOADING_DISABLE });
      dispatch({ type: alias.SETDOMAIN, payload: data.domain });
      toast.success("Domain Update Succussfully");
    })
    .catch((error) => {
      dispatch({
        type: alias.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({ type: alias.LOADING_DISABLE });
    });
};

// export const actionName = (input) => async (dispatch,getState) => {
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
