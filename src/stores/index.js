import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReducer from "./Auth/reducer";
import postReducer from "./Post/reducer";
import categoryReducer from "./Category/reducer";
const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
  Category: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
