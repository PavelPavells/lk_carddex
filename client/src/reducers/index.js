import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";
import accountReducer from "./accountReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  account: accountReducer
});