import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Jumbotron from './jumbotron';

const GridLayout = () => {
    return (
        <>
            <Container fluid>

                <Row className="justify-content-md-center">
                    <Jumbotron />
                </Row>
                <Row style={{ padding: "2rem" }}><h2>Spilles i dag</h2></Row>
                <Row style={{ padding: "2rem" }} className="justify-content-md-center">
                    
                    <CardGroup>
                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Suicide Squad</Card.Title>
                                <Card.Link href="#">18:00</Card.Link>
                                <Card.Link href="#">21:00</Card.Link>
                                <Card.Link href="#">22:30</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Avengers</Card.Title>
                                <Card.Link href="#">18:00</Card.Link>
                                <Card.Link href="#">21:00</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Jaws</Card.Title>
                                <Card.Link href="#">19:00</Card.Link>
                                <Card.Link href="#">21:30</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Interstellar</Card.Title>
                                <Card.Link href="#">18:00</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Interstellar</Card.Title>
                                <Card.Link href="#">00:00</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Title>Interstellar</Card.Title>
                                <Card.Link href="#">21:00</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>

            </Container>
        </>
    )
}

export default GridLayout;