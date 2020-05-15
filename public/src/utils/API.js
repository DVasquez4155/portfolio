import axios from "axios";
export default {
  send: function(form) {
    return axios.post("https://www.dvasquez4155.com/api/contact", form);
  }
};
