import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Image, Col, Row, Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { ms } from "../Assets/Stores/MovieStore";

const MoviePage = () => {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  if (!hasLoaded) {
    setHasLoaded(true);
    ms.getMovieById(id);
  }
  if (ms.Movie === null) {
    return <h1>Loading...</h1>;
  } else {
    return <LoadedMoviePage />;
  }
};

function LoadedMoviePage() {
  if (!ms.Movie) return <h1>Loading....</h1>;
  else {
    return (
      <Container fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image id="default-img" src={`${ms.Movie.posterURL}`} rounded />
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <h1>{ms.Movie.movieName}</h1>
            </Row>
            <Row>
              <p>
                Summary
                <br />
                {ms.Movie.description}
              </p>
            </Row>
            <Row>
              <Col>
                <h4>
                  IMDB Rating:{" "}
                  <small className="text-muted">
                    {ms.Movie.imDbRating} / 10
                  </small>
                </h4>
              </Col>
              <Col>
                <h4>Instruktør: </h4>
                <p>{ms.Movie.director}</p>
                <br />
                <h4>Stjerner: </h4>
                <ListGroup>
                  {ms.Movie.actors.split(",").map((actor) => (
                    <ListGroup.Item key={actor}>{actor}</ListGroup.Item>
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
                {ms.Movie.movieFeaturesDates.split(",").map((item) => (
                  <a key={item} href="#/infobook/">
                    {item}
                  </a>
                ))}
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default observer(MoviePage);
