import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import defaultImg from "../images/default-movie.jpg";
import { Image, Col, Row, Container } from "react-bootstrap";
import MovieService from "../Assets/Services/MovieService";

const MovieView = () => {
  const initState = {
    movie: null,
  };

  const [myId, setMyId] = useState(0);
  const [movie, setMovie] = useState(initState);

  let { id } = useParams();
  console.log(id);
  setMyId({ id: id });

  const GetMovie = () => {
    console.log(`id: ${myId}`);
    MovieService.getMovieById({ myId })
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   GetMovie();
  // }, []);
  while (movie.movie === null) {
    GetMovie();
  }

  if (movie.movie === null || movie.movie === undefined) {
    return <DefaultMoviePage />;
  } else {
    return <LoadedMoviePage movie={movie} />;
  }
};

function LoadedMoviePage(movie) {
  console.log(movie);

  if (!movie) return <h1>Loading....</h1>;
  else {
    return (
      <Container fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image id="default-img" src={movie.posterImageString} rounded />
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <h1>{movie.movieName}</h1>
            </Row>
            <Row>
              <p>
                Movie Description
                <br />I modsætning til hvad mange tror, er Lorem Ipsum ikke bare
                tilfældig tekst. Det stammer fra et stykke litteratur på latin
                fra år 45 f.kr., hvilket gør teksten over 2000 år gammel.
                Richard McClintock, professor i latin fra Hampden-Sydney
                universitet i Virginia, undersøgte et af de mindst kendte ord
                "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets
                oprindelse ved at studere brugen gennem klassisk litteratur.
                Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de
                Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som
                er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær
                i renæssancen, er en afhandling om etik. Den første linie af
                Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje
                i afsnit 1.10.32.
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
          <Col xs={12} md={12}>
            <h2>{movie.movieFeatureDates}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

function DefaultMoviePage() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <Image id="default-img" src={defaultImg} rounded />
        </Col>
        <Col xs={6} md={6}>
          <Row>
            <h1>Movie Title</h1>
          </Row>
          <Row>
            <p>
              Movie Description
              <br />I modsætning til hvad mange tror, er Lorem Ipsum ikke bare
              tilfældig tekst. Det stammer fra et stykke litteratur på latin fra
              år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard
              McClintock, professor i latin fra Hampden-Sydney universitet i
              Virginia, undersøgte et af de mindst kendte ord "consectetur" fra
              en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at
              studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra
              afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum"
              (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45
              f.kr. Bogen, som var meget populær i renæssancen, er en afhandling
              om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit
              amet..." kommer fra en linje i afsnit 1.10.32.
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
        <Col xs={12} md={12}>
          <h2>Movie Play Times</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieView;
