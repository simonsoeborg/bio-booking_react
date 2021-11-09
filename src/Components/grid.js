import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Jumbotron from './jumbotron';
import Cards from './cards';


const GridLayout = () => {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Jumbotron />
            </Row>
            <Cards />
        </Container>
    )
}

export default GridLayout;
