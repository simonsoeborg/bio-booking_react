import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Form, Col, Row, Button, Modal } from "react-bootstrap";
import { ts } from "../../../Assets/Stores/TheaterStore";

const EditTheater = () => {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [success, setSuccess] = useState(false)

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const handleOnShow = () => setShowModal(true);

  const history = useHistory();

  if (!hasLoaded) {
    setHasLoaded(true);
    ts.getTheaterById(id);
  }

  const handleReturnClick = () => {
    history.push("/admin")
  }

  const onFormSubmit = (id, data) => {
    let res = ts.updateTheater(id, data);
    if(res === 204) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }

    handleOnShow();
  };

  if (!ts.Theater) return <h1>Loading....</h1>;
  else {
    return (
      <Container>
        <Row>
          <Col>
            <Container
              style={{
                contentAlign: "center",
                textAlign: "left",
                placeContent: "center",
                width: "45%",
              }}
            >
              <Form>
                <Form.Group>
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    placeholder={ts.Theater.id}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Titel</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    defaultValue={ts.Theater.theaterName}
                    onChange={(e) => {
                      ts.Theater.theaterName = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Udgivelsesår</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    defaultValue={ts.Theater.theaterRows}
                    onChange={(e) => {
                      ts.Theater.theaterRows = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Visningstider</Form.Label>
                  <Form.Control
                    size="sm" 
                    type="text"
                    defaultValue={ts.Theater.theaterSeats}
                    onChange={(e) => {
                      ts.Theater.theaterSeats = e.target.value;
                    }}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="outline-success"
                    style={{ margin: '1rem'}}
                    onClick={() => onFormSubmit(ts.Theater.id, JSON.stringify(ts.Theater))}
                  >
                    Rediger
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
            { success ? <Modal.Body>Der gik noget galt, da vi prøvede at opdatere: { ts.Theater.theaterName } </Modal.Body> : <Modal.Body>{ ts.Theater.theaterName } er nu opdateret! </Modal.Body>}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleOnClose && handleReturnClick}>
              Luk
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
};

export default observer(EditTheater);
