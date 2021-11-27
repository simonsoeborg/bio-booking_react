import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import MovieAdmin from "./AdminComponents/MovieCRUD";
import UserAdmin from "./AdminComponents/UserCRUD";
import TheaterAdmin from "./AdminComponents/TheaterCRUD";
import BookingAdmin from "./AdminComponents/BookingCRUD";

const ContentSwitch = ({ displaySwitch }) => {
  switch (displaySwitch) {
    case 1:
      return <MovieAdmin />;
    case 2:
      return <UserAdmin />;
    case 3:
      return <TheaterAdmin />;
    case 4:
      return <BookingAdmin />;
    default:
      return <MovieAdmin />;
  }
};

const AdminPanel = () => {
  const [displaySwitch, setDisplaySwitch] = useState();

  return (
    <Container>
      <h3>Administration</h3>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(1)}
            >
              Movies
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(2)}
            >
              Users
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(3)}
            >
              Theater
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(4)}
            >
              Bookings
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={10}>
          <ContentSwitch displaySwitch={displaySwitch} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
