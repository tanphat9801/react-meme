import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import postReducer from "./Post/reducer";

const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
