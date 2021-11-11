import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44349/api",
});

export default api;
