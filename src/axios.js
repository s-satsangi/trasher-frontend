import axios from "axios";

const instance = axios.create({
  baseURL: "https://scrapparts.herokuapp.com/",
  // withCredentials: true
});

export default instance;
