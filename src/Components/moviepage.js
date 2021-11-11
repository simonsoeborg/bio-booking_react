import React, { Component } from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import MovieService from "../Assets/Services/MovieService";
import api from "../Assets/api";

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
    await api.get(movieApiUrl + id).then((response) => {
      this.setState({ movie: response.data });
    });
    await this.setState({ movie: this.state.movie });
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
            <Image
              id="default-img"
              src={`${movie.movie.posterImageString}`}
              rounded
            />
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <h1>{movie.movie.movieName}</h1>
            </Row>
            <Row>
              <p>
                Summary
                <br />
                Skal hentes fra IMDB
              </p>
            </Row>
            <Row>
              <Col>
                <h4>IMDB Rating</h4>
              </Col>
              <Col>
                <h4>Movie Director, Movie Actors</h4>
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
              <p>{movie.movie.movieFeatureDates}</p>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
