import * as alias from './../constant'


export const stateReducer = (state = {}, action) => {
    switch (action.type) {
        case alias.LOADING_ENABLE:
            return { loading: true };
        case alias.LOADING_DISABLE:
            return { loading: false };
        case alias.ERROR:
            return { error: action.payload }
        case alias.REMOVE_ERROR:
            return { error: null }
        case alias.DEFAULT_STATE:
            return {}
        default:
            return state;
    }
};

export const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case alias.GET_USER:
            return { user: action.payload }
        case alias.UPLOAD_FILE:
            return { file: action.payload }
        case alias.GET_PROFILE:
            return { profile: action.payload }
        case alias.CREATE_PROFILE:
            return { createProfilestatus: action.payload };
        case alias.UPDATE_PROFILE:
            return { updateProfileStatus: action.payload }
        case alias.GET_ANALTICS:
            return { analtics: action.payload }
        case alias.CREATE_EDUCATION:
            return { createEducationStatus: action.payload }
        case alias.GET_EDUCATION:
            return { educations: action.payload }
        case alias.GET_EDUCATION_BY_ID:
            return { education: action.payload }
        case alias.DELETE_EDUCATION_BY_ID:
            return { deleteEducationStatus: action.payload }
        case alias.UPDATE_EDUCATION_BY_ID:
            return { updateEducationStatus: action.payload }
        case alias.CREATE_EXPERIENCE:
            return { createExperienceStatus: action.payload }
        case alias.GET_EXPERIENCE:
            return { experiences: action.payload }
        case alias.GET_EXPERIENCE_BY_ID:
            return { experience: action.payload }
        case alias.UPDATE_EXPERIENCE_BY_ID:
            return { deleteExperienceStatus: action.payload }
        case alias.UPDATE_EXPERIENCE_BY_ID:
            return { updateExperienceStatus: action.payload }
        case alias.CREATE_PROJECT:
            return { createprojectStatus: action.payload }
        case alias.GET_PROJECT:
            return { projects: action.payload }
        case alias.REFRESH_PROJECT:
            return { projects: action.payload }
        case alias.GET_PROJECT_BY_ID:
            return { project: action.payload }
        case alias.DELETE_EDUCATION_BY_ID:
            return { deleteprojectStatus: action.payload }
        case alias.UPDATE_PROJECT_BY_ID:
            return { updateprojectStatus: action.payload }
        case alias.GET_SKILLS:
            return { skills: action.payload }
        case alias.ADD_SKILLS:
            return { addSkillStatus: action.payload }
        case alias.DELETE_SKILLS:
            return { deleteSkillStatus: action.payload }
        case alias.RESET:
            return {  }
        default:
            return state;
    }
};