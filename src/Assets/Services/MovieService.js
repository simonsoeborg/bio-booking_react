import { Component } from "react";
import api from "../api";
import movieStore from "../Stores/MovieStore";

const movieApiUrl = "https://localhost:44349/api/Movie/";

const initialState = {
  movies: [],
  movie: JSON,
};

class MovieService extends Component {
  state = initialState;

  getMovies = async () => {
    await api.get(movieApiUrl).then((response) => {
      movieStore.setState({ movies: response.data });
    });
  };

  getMovieById = async (id) => {
    await api.get(movieApiUrl + id).then((response) => {
      movieStore.setState({ movie: response.data });
    });
  };

  addMovie = async (data) => {
    await api.post(movieApiUrl, JSON.stringify(data)).then((response) => {
      console.log(response);
    });
  };

  updateMovie = async (id, data) => {
    await api.put(movieApiUrl + id, JSON.stringify(data)).then((response) => {
      console.log(response);
    });
  };

  deleteMovie = async (id) => {
    await api.delete(movieApiUrl + id).then((response) => {
      console.log(response);
    });
  };
}

export default MovieService;
