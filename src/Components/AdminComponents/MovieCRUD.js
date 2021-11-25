// List all movies in a table, Have Delete and Edit buttons from each movie, on table row click navigate to movie details
import { observer } from "mobx-react-lite";
import { Table, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { ms } from "../../Assets/Stores/MovieStore";

const initialState = {
  movies: [],
  movie: null,
};

const MovieAdmin = () => {
  const history = useHistory();

  const routeEditChange = (id) => {
    let path = `./editmovie/${id}`;
    history.push(path);
  };

  const routeCreateChange = () => {
    let path = `./createmovie/`;
    history.push(path);
  }

  if (!ms.Movies || ms.Movies.length < 1) return <h1>Loading..</h1>;
  else
    return (
      <Container>
        <Button className="MovieAddToDB" variant="outline-success" onClick={() => routeCreateChange()}>
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
            {ms.Movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.movieName}</td>
                <td>{movie.movieDuration}</td>
                <td>{movie.movieReleaseDate}</td>
                <td>
                  <Button
                    className="TableEditBtn"
                    variant="outline-warning"
                    onClick={() => routeEditChange(movie.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => ms.deleteMovie(movie.id)}
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
};

export default observer(MovieAdmin);
