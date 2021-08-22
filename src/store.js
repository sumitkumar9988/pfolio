import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { signupReducer, loginReducer } from "./redux/reducer/authReducer";

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
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
