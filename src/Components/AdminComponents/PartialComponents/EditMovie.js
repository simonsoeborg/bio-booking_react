import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useParams } from "react-router";
import { Container, Form, Image, Col, Row, Button } from "react-bootstrap";
import { ms } from "../../../Assets/Stores/MovieStore";

const EditMovie = () => {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);

  const [movieName, setMovieName] = useState("");
  const [movieRelease, setMovieRelease] = useState("");
  const [movieFeatures, setMovieFeatures] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [movieDuration, setMovieDuration] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [description, setDescription] = useState("");
  if (!hasLoaded) {
    setHasLoaded(true);
    ms.getMovieById(id);
  }

  const onFormSubmit = () => {
    const toObject = {
      movieName: movieName ? null || "" : ms.Movie.movieName,
      movieReleaseDate: movieRelease ? null || "" : ms.Movie.movieReleaseDate,
      movieFeaturesDates: movieFeatures
        ? null || ""
        : ms.Movie.movieFeaturesDates,
      imDbRating: imdbRating ? null || "" : ms.Movie.imDbRating,
      movieDuration: movieDuration ? null || "" : ms.Movie.movieDuration,
      posterURL: posterURL ? null || "" : ms.Movie.posterURL,
      director: director ? null || "" : ms.Movie.director,
      actors: actors ? null || "" : ms.Movie.actors,
      description: description ? null || "" : ms.Movie.description,
    };

    const toJSONObject = JSON.stringify(toObject);

    console.log(toJSONObject);

    ms.updateMovie(ms.movie.id, toJSONObject);
  };

  if (!ms.Movie) return <h1>Loading....</h1>;
  else {
    return (
      <Container>
        <Row>
          <Col>
            <Container style={{ padding: "1rem" }}>
              <Image
                variant="top"
                src={ms.Movie.posterURL}
                style={{ width: "180px", height: "260px" }}
              />
            </Container>
          </Col>
          <Col>
            <Container
              style={{
                contentAlign: "center",
                textAlign: "left",
                placeContent: "center",
                width: "75%",
              }}
            >
              <Form>
                <Form.Group>
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ms.Movie.id}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Titel</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.movieName}
                    onChange={(e) => {
                      setMovieName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Udgivelsesår</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.movieReleaseDate}
                    onChange={(e) => {
                      setMovieRelease(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Visningstider</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.movieFeaturesDates}
                    onChange={(e) => {
                      setMovieFeatures(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>IMDb Rating</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.imDbRating}
                    onChange={(e) => {
                      setImdbRating(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Varighed</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.movieDuration}
                    onChange={(e) => {
                      setMovieDuration(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>URL til Poster</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.posterURL}
                    onChange={(e) => {
                      setPosterURL(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Instruktør(er)</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.director}
                    onChange={(e) => {
                      setDirector(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Skuespiller(e)</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ms.Movie.actors}
                    onChange={(e) => {
                      setActors(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Beskrivelse</Form.Label>
                  <Form.Control
                    as="textarea"
                    defaultValue={ms.Movie.description}
                    style={{ height: "150px" }}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-success"
                  onClick={() => onFormSubmit()}
                >
                  Rediger
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default observer(EditMovie);
