import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const BioNavbar = () => {
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
                            <LinkContainer to="/team">
                                <Nav.Link>Booking</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default BioNavbar;