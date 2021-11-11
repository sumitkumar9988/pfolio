import * as alias from "./../constant";

const initialStte = {
  loading: false,
  error: "",
};

export const stateReducer = (state = initialStte, action) => {
  switch (action.type) {
    case alias.LOADING_ENABLE:
      return { loading: true };
    case alias.LOADING_DISABLE:
      return { loading: false };
    case alias.ERROR:
      return { error: action.payload };
    case alias.REMOVE_ERROR:
      return { error: null };
    case alias.DEFAULT_STATE:
      return {};
    default:
      return state;
  }
};

export const getEducationListReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_EDUCATION:
      return action.payload;
    default:
      return state;
  }
};

export const getExperienceListReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};

export const getEducationByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_EDUCATION_BY_ID:
      return action.payload;
    case alias.RESET_EDUCATION:
      return {};
    default:
      return state;
  }
};

export const GetUserReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const UploadFileReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPLOAD_FILE:
      return action.payload;
    default:
      return state;
  }
};

export const GetProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export const createProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.CREATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_PROFILE:
      return action.payload;
    case "RESET_PROFILE_UPDATE":
      return;
    default:
      return state;
  }
};

export const getAnalticsReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_ANALTICS:
      return action.payload;
    default:
      return state;
  }
};

export const createEducationReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.CREATE_EDUCATION:
      return action.payload;
    default:
      return state;
  }
};

export const deleteEducationReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.DELETE_EDUCATION_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
export const updateEducationReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_EDUCATION_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const createExperienceReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.CREATE_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};

export const getExperienceByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_EXPERIENCE_BY_ID:
      return action.payload;
    case alias.RESET_EXPERIENCE:
      return {};
    default:
      return state;
  }
};

export const deleteExperienceByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_EXPERIENCE_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const updateExperienceByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_EXPERIENCE_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const createProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.CREATE_PROJECT:
      return action.payload;
    default:
      return state;
  }
};

export const getProjectProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_PROJECT:
      return action.payload;
    case alias.REFRESH_PROJECT:
      return action.payload;
    case alias.RESET_PROJECT:
      return {};
    default:
      return state;
  }
};

export const getProjectByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_PROJECT_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const deleteProjectByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.DELETE_EDUCATION_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const updateProjectByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_PROJECT_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const getSkillsReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

export const getSkillByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.GET_SKILL_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const addSkillsReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.ADD_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

export const deleteSkillsReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.DELETE_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

export const updateDomainReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.UPDATE_DOMAIN:
      return action.payload;
    default:
      return state;
  }
};

export const domainReducer = (state = {}, action) => {
  switch (action.type) {
    case alias.SETDOMAIN:
      return action.payload;
    default:
      return state;
  }
};
