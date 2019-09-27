import { REFRESH_ACCOUNT_DATA } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}; 
export default function(state = initialState, action) {
  switch (action.type) {
    case REFRESH_ACCOUNT_DATA:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}