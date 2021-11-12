import axios from "axios";

const url = "https://localhost:44349/api/";

const api = axios.create({
  baseURL: "https://localhost:44349/api/",
});

const movieUrl = url + "Movie/";

export default { api, url, movieUrl };
