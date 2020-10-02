import axios from "axios";

// config do axios
const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
