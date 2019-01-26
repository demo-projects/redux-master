import {applyMiddleware, combineReducers, createStore} from "../lib/index.js";
import {commentsReducer, postsReducer, uiReducer, usersReducer,} from './reducers/index.js';
import {logger} from "./middleware/logger.js";

// initial state
const AppState = {
  ui: {
    loading: false,
    toasts: []
  },
  users: [],
  posts: [],
  comments: []
};

const rootReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});


const middleware = applyMiddleware([
  logger
]);

export const blog = createStore(rootReducer, AppState, middleware);
