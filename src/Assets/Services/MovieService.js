import { Component } from "react";
import api from "../api";

const movieApiUrl = api.movieUrl;

const initialState = {
  movies: [],
  movie: JSON,
};

class MovieService extends Component {
  state = initialState;

  async componentDidMount() {
    await api.api.get(movieApiUrl).then((response) => {
      this.setState({ movies: response.data });
    });

    console.log(this.state.movies);
  }

  getMovieById = (id) => {
    return this.state.movies.find((item) => {
      return item.id === id;
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
