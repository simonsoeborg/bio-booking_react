import React, { useState } from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { us } from '../Assets/Stores/UserStore'; 

export const BioNavbar = () => {
  const { user, isAuthenticated } = useAuth0();

  const [ isAdmin, setIsAdmin ] = useState(false);

  if(isAuthenticated && !isAdmin) {
    us.Users.map((getUser) => {
      if(getUser.email === user.email) {
        if(getUser.admin) {
          setIsAdmin(true);
          us.getUsersAsync();
        }
      }
    })
  }

  return (
    <div>
      <Navbar expand="lg" bg="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand to="/">Bio 404</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Hjem</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/booking">
                <Nav.Link>Booking</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/upcoming">
                <Nav.Link>Kommende film</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/program">
                <Nav.Link>Program</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>{isAdmin ? "Admin Panel" : ""}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Form className="d-flex" style={{ paddingRight: "10rem" }}>
          <LinkContainer to="/login">
            <Nav.Link className="specialLink">
              {" "}
              {isAuthenticated ? user.name : "Admin"}{" "}
            </Nav.Link>
          </LinkContainer>
        </Form>
      </Navbar>
    </div>
  );
};

export default BioNavbar;
