import axios from "axios";
const setAuthToken = session_token => {
  if (session_token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = session_token;
  } else {
    // Delete auth header
     axios.defaults.headers.common["Authorization"] = null;
  }
};
export default setAuthToken; 