import { Component } from "react";
import api from "../api";

const movieApiUrl = "https://localhost:8181/api/Movie/";

const initialState = {
  movies: [],
  movie: JSON,
};

class MovieService extends Component {
  state = initialState;

  getMovies = async () => {
    await api.get(movieApiUrl).then((response) => {
      this.setState({ movies: response.data });
    });
  };

  getMovieById = async (id) => {
    await api.get(movieApiUrl + id).then((response) => {
      this.setState({ movie: response.data });
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
