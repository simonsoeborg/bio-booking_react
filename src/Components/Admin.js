import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import MovieAdmin from "./AdminComponents/MovieCRUD";
import UserAdmin from "./AdminComponents/UserCRUD";
import TheaterAdmin from "./AdminComponents/TheaterCRUD";
import BookingAdmin from "./AdminComponents/BookingCRUD";
import { us } from '../Assets/Stores/UserStore';
import { useAuth0 } from "@auth0/auth0-react";
import { toJS } from "mobx";

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
  const { user, isAuthenticated } = useAuth0();
  const [ isAdmin, setIsAdmin ] = useState(false);
  const [ exists, setExists ] = useState(false);
  const [ userExists, setUserExists ] = useState(null)

  if (isAuthenticated) {
    toJS(us.Users).map((getUser) => {
      if(user.email === getUser.email) {
        // User doesnt exists "create new User"
        if(!exists) {
          setExists(true);
          if(userExists === null) {
            setUserExists(getUser);
          }
        }
      }
    })
  }

  if(userExists !== null) {
    if(userExists.admin) {
      if(!isAdmin)
        setIsAdmin(true);
    }
  }

  if(!isAdmin) {
    return <h1>Not authorized!</h1>
  } else {
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
              Film
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(2)}
            >
              Bruger
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(3)}
            >
              Sal
            </ListGroup.Item>
            <ListGroup.Item
              className="ListGroupBtn"
              onClick={() => setDisplaySwitch(4)}
            >
              Booking
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={10}>
          <ContentSwitch displaySwitch={displaySwitch} />
        </Col>
      </Row>
    </Container>
  );
}
};

export default AdminPanel;
