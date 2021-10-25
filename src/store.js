import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
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

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: resetPasswordReducer,
  changePassword: changePasswordReducer,
  updateProfile: updatProfileReducer,
  getProfile: getProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  login: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
