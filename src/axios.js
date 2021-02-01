import axios from "axios";

const instance = axios.create({
  baseURL: "https://litterally.herokuapp.com/",
  // withCredentials: true
});

export default instance;
