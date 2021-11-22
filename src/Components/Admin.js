import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import MovieAdmin from "./AdminComponents/MovieCRUD";

const AdminPanel = () => {
  const [displayMovie, setDisplayMovie] = useState(true);
  const [displayUser, setDisplayUser] = useState(false);

  return (
    <Container>
      <Row>
        <h3>Adminstration</h3>
        <Col>
          <ListGroup>
            <ListGroup.Item onClick={displayMovie ? false : true}>
              Movies
            </ListGroup.Item>
            <ListGroup.Item>Users</ListGroup.Item>
            <ListGroup.Item>Theater</ListGroup.Item>
            <ListGroup.Item>Bookings</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={10}>
          {displayMovie ? <MovieAdmin /> && setDisplayUser(false) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
