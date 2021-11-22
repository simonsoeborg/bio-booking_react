// List all movies in a table, Have Delete and Edit buttons from each movie, on table row click navigate to movie details
import { Component, useState } from "react";
import { Table, Image, Button } from "react-bootstrap";
import movieStore from "../../Assets/Stores/MovieStore";

const initialState = {
  movies: [],
  movie: null,
};

class MovieAdmin extends Component {
  state = initialState;
  constructor() {
    // get All movies
    this.setState({ movies: movieStore.getMovies });
  }

  render() {
    return (
      <Table striped bordered hover>
        {/* <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td>
                <Image
                  id="default-img"
                  src={`${movie.movie.posterURL}`}
                  rounded
                />
              </td>
              <td>movie.movie.movieName</td>
              <td>
                <Button variant="outlined-warning">Edit</Button>
              </td>
              <td>
                <Button
                  variant="outlined-danger"
                  onClick={MovieService.deleteMovie(movie.movie.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </Table>
    );
  }
}

export default MovieAdmin;
