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
        case alias.CREATE_PROFILE:
            return { profile: action.payload };
        case alias.GET_USER:
            return { user: action.payload }
        default:
            return state;
    }
};