import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  signupReducer,
  loginReducer,
  forgetPasswordReducer,
  resetPasswordReducer,
  changePasswordReducer,
} from "./redux/reducer/authReducer";

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: resetPasswordReducer,
  changePassword: changePasswordReducer,
});

const userInfoFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
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
