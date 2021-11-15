// List all movies in a table, Have Delete and Edit buttons from each movie, on table row click navigate to movie details
import { Component } from "react";
import MovieService from "../../Assets/Services/MovieService";

const initialState = {
  movies: [],
  movie: null,
};

class MovieAdmin extends Component {
  state = initialState;
  async componentDidMount() {
    // get All movies
    await MovieService.componentDidMount();
    await dbUserStore.getUsers;
  }
}

export default MovieAdmin;
