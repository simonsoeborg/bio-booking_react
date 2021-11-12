import { Component } from "react";
import { Row, Card, CardGroup } from "react-bootstrap";
import api from "../Assets/api";

const initialState = {
  movies: [],
};

export default class MovieCards extends Component {
  state = initialState;
  // Get data from Movie Services
  async componentDidMount() {
    await api.api.get(api.movieUrl).then((response) => {
      this.setState({ movies: response.data });
    });
  }

  render() {
    let movies = this.state;
    if (movies.movies.length < 1) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Row style={{ padding: "2rem" }}>
          <h2>Spilles i dag</h2>
        </Row>
        <Row style={{ padding: "2rem" }} className="justify-content-md-center">
          <CardGroup>
            {Object.keys(movies.movies).map((index) => (
              <a
                key={movies.movies[index].id}
                style={{ cursor: "pointer" }}
                href={"#/movie/" + movies.movies[index].id}
              >
                <Card
                  key={movies.movies[index].id}
                  border="dark"
                  style={{ width: "15rem" }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={movies.movies[index].posterURL}
                      style={{ width: "180px", height: "260px" }}
                    />
                    <Card.Title>{movies.movies[index].movieName}</Card.Title>
                    <Card.Link href="#/infobook/">18:00</Card.Link>
                  </Card.Body>
                </Card>
              </a>
            ))}
          </CardGroup>
        </Row>
      </div>
    );
  }
}
