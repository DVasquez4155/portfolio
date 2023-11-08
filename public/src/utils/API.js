import axios from "axios";
const API = {
  send: function(form) {
    return axios.post("/api/contact", form);
  }
}
export default API;
