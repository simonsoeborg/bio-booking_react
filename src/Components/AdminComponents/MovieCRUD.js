// List all movies in a table, Have Delete and Edit buttons from each movie, on table row click navigate to movie details
import { Component } from "react";
import { Table, Button, Container } from "react-bootstrap";
import MovieStore from "../../Assets/Stores/MovieStore";

const initialState = {
  movies: [],
  movie: null,
};

class MovieAdmin extends Component {
  state = initialState;
  async componentDidMount() {
    // get All movies
    this.setState({ movies: await MovieStore.getMoviesAsync() });
  }

  render() {
    if (!this.state.movies) return <h1>Loading..</h1>;
    else
      return (
        <Container>
          <Button className="MovieAddToDB" variant="outline-success">
            Tilføj film
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Varighed</th>
                <th>Udgivelsesdato</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie, index) => (
                <tr key={index}>
                  <td>{movie.movieName}</td>
                  <td>{movie.movieDuration}</td>
                  <td>{movie.movieReleaseDate}</td>
                  <td>
                    <Button className="TableEditBtn" variant="outline-warning">
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => MovieStore.deleteMovie(movie.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      );
  }
}

export default MovieAdmin;
