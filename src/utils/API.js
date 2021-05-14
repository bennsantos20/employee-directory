import axios from "axios";

export default {
  search: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,phone,email,dob&nat=US&results=15"
    );
  },
};