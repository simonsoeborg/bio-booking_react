import api from "../api";
const movieApiUrl = "https://localhost:44349/api/Movie/";

const getMovies = () => {
  return api.get(movieApiUrl);
};

const getMovieById = (id) => {
  return api.get(movieApiUrl + id);
};

const addMovie = (data) => {
  return api.post(movieApiUrl, data);
};
const updateMovie = (id, data) => {
  return api.put(movieApiUrl + id, data);
};
const deleteMovie = (id) => {
  return api.delete(movieApiUrl + id);
};

export default {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
