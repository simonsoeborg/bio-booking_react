import axios from "axios";

// Lokal
// const url = "https://localhost:44349/api/";
// Remote
const url = "https://uglyrage.com/api/";

const api = axios.create({
  baseURL: url,
});

const movieUrl = url + "Movie/";
const userUrl = url + "User/";

export default { api, url, movieUrl, userUrl };
