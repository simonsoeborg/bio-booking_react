import React, { Component } from "react";
import { Image, Col, Row, Container, ListGroup } from "react-bootstrap";
import MovieService from "../Assets/Services/MovieService";
import api from "../Assets/api";

// const movieApiUrl = "https://localhost:44349/api/Movie/";
const movieApiUrl = "https://localhost:44349/api/Movie/";

const initialState = {
  movies: [],
  movie: null,
};

export default class MoviePage extends Component {
  state = initialState;

  async componentDidMount() {
    let id = this.props.match.params.id;
    await this.setState({ movies: MovieService.getMovies });

    // Skulle bare være fra MovieService.getMovieById(id) men funktioner med id kan ikke kaldes i setState
    await api.get(movieApiUrl + id).then((response) => {
      this.setState({ movie: response.data });
    });
  }

  render() {
    if (this.state.movie === null) {
      return <h1>Loading...</h1>;
    } else {
      return <LoadedMoviePage movie={this.state.movie} />;
    }
  }
}

function LoadedMoviePage(movie) {
  if (!movie) return <h1>Loading....</h1>;
  else {
    return (
      <Container fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image id="default-img" src={`${movie.movie.posterURL}`} rounded />
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <h1>{movie.movie.movieName}</h1>
            </Row>
            <Row>
              <p>
                Summary
                <br />
                {movie.movie.description}
              </p>
            </Row>
            <Row>
              <Col>
                <h4>
                  IMDB Rating:{" "}
                  <small class="text-muted">
                    {movie.movie.imDbRating} / 10
                  </small>
                </h4>
              </Col>
              <Col>
                <h4>Instruktør: </h4>
                <p>{movie.movie.director}</p>
                <br />
                <h4>Stjerner: </h4>
                <ListGroup>
                  {movie.movie.actors.split(",").map((actor) => (
                    <ListGroup.Item>{actor}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Col>
              <h4>Visningsdage: </h4>
            </Col>
            <Col>
              <p>
                {movie.movie.movieFeaturesDates.split(",").map((item) => (
                  <a href="#">{item}</a>
                ))}
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
