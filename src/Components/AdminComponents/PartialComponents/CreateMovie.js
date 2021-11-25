import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Form, Image, Col, Row, Button, Modal } from "react-bootstrap";
import { ms } from "../../../Assets/Stores/MovieStore";
import DefaultMovie from '../../../images/default-movie.jpg'

const CreateMovie = () => {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [success, setSuccess] = useState(false)

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const handleOnShow = () => setShowModal(true);

  const history = useHistory();

  if (!hasLoaded) {
    setHasLoaded(true);
    ms.getMovieById(id);
  }

  const handleReturnClick = () => {
    history.push("/admin")
  }

  const onFormSubmit = (data) => {
    let res = ms.postMovie(data);
    if(res === 204) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }

    handleOnShow();
  };

    return (
      <Container>
        <Row>
          <Col>
            <Container style={{ padding: "1rem" }}>
              <Image
                variant="top"
                src={ms.Movie.posterURL ? null : DefaultMovie}
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
                  <Form.Label>Titel</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.movieName = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Udgivelsesår</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.movieReleaseDate = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Visningstider</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.movieFeaturesDates = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>IMDb Rating</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.imDbRating = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Varighed</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.movieDuration = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>URL til Poster</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.posterURL = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Instruktør(er)</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.director = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Skuespiller(e)</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    onChange={(e) => {
                      ms.Movie.actors = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Beskrivelse</Form.Label>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    style={{ height: "150px" }}
                    onChange={(e) => {
                      ms.Movie.description = e.target.value;
                    }}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="outline-success"
                    style={{ margin: '1rem'}}
                    onClick={() => onFormSubmit(JSON.stringify(ms.Movie))}
                  >
                    Opret
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
        <Modal show={showModal} onHide={handleOnClose}>
          <Modal.Header closeButton>
            { success ? <Modal.Title>Error!</Modal.Title> : <Modal.Header>Success!</Modal.Header>}
          </Modal.Header>
            { success ? <Modal.Body>Der gik noget galt, da vi prøvede at oprette: { ms.Movie.movieName } </Modal.Body> : <Modal.Body>{ ms.Movie.movieName } er nu oprettet! </Modal.Body>}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleOnClose && handleReturnClick}>
              Luk
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};

export default observer(CreateMovie);
