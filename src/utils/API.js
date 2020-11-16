import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const INCLUDE = "&inc=picture,name,phone,email,dob";
const RESULTS = "?results=200";

const API =  {
    search: () => {
        return axios.get(BASEURL + RESULTS + INCLUDE);
    }
}

export default API;