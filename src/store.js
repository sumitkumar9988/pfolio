import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxReset from "redux-reset";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  signupReducer,
  loginReducer,
  forgetPasswordReducer,
  resetPasswordReducer,
  changePasswordReducer,
  updatProfileReducer,
  getProfileReducer,
} from "./redux/reducer/authReducer";
import {
  stateReducer,
  getEducationListReducer,
  getExperienceListReducer,
  getEducationByIDReducer,
  GetUserReducer,
  UploadFileReducer,
  GetProfileReducer,
  createProfileReducer,
  updateProfileReducer,
  getAnalticsReducer,
  createEducationReducer,
  deleteEducationReducer,
  updateEducationReducer,
  createExperienceReducer,
  getExperienceByIDReducer,
  deleteExperienceByIDReducer,
  updateExperienceByIDReducer,
  createProjectReducer,
  getProjectProjectReducer,
  getProjectByIDReducer,
  deleteProjectByIDReducer,
  updateProjectByIDReducer,
  getSkillsReducer,
  addSkillsReducer,
  getSkillByIDReducer,
  deleteSkillsReducer,
  updateDomainReducer,
  domainReducer,
} from "./redux/reducer/dashboardReducer";

const dashboardReducer = combineReducers({
  educations: getEducationListReducer,
  experiences: getExperienceListReducer,
  education: getEducationByIDReducer,
  user: GetUserReducer,
  file: UploadFileReducer,
  profile: GetProfileReducer,
  createProfilestatus: createProfileReducer,
  updateProfileStatus: updateProfileReducer,
  analtics: getAnalticsReducer,
  createEducationStatus: createEducationReducer,
  deleteEducationStatus: deleteEducationReducer,
  updateEducationStatus: updateEducationReducer,
  createExperienceStatus: createExperienceReducer,
  experience: getExperienceByIDReducer,
  deleteExperienceStatus: deleteExperienceByIDReducer,
  updateExperienceStatus: updateExperienceByIDReducer,
  createprojectStatus: createProjectReducer,
  projects: getProjectProjectReducer,
  project: getProjectByIDReducer,
  deleteprojectStatus: deleteProjectByIDReducer,
  updateprojectStatus: updateProjectByIDReducer,
  skills: getSkillsReducer,
  skill: getSkillByIDReducer,
  addSkillStatus: addSkillsReducer,
  deleteSkillStatus: deleteSkillsReducer,
  updateDomainStatus: updateDomainReducer,
  domain: domainReducer,
});

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: resetPasswordReducer,
  changePassword: changePasswordReducer,
  updateProfile: updatProfileReducer,
  getProfile: getProfileReducer,
  state: stateReducer,
  store: dashboardReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  login: { user: userInfoFromStorage },
};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
  reducer,
  initialState,

  composeEnhancers(applyMiddleware(...middleware), reduxReset())
);
export default store;
