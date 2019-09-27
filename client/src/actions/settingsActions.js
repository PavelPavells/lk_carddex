import axios from "axios";
import { REFRESH_ACCOUNT_DATA } from "./types";
export const refreshAccountData = (userData, history) => dispatch => {
    axios
      .post("/api/users/account", userData)
      .then(res => history.push("/"))
      .catch(err => {
        dispatch({
            type: REFRESH_ACCOUNT_DATA,
            payload: err.response.data
        })
    })
}