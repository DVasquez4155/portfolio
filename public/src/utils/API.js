import axios from "axios";
const API = {
  send: function(form) {
    return axios.post("https://api.portfolio.dvas4155.com/api/contact", form);
  }
}
export default API;
