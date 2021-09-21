import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from './jumbotron';

const GridLayout = () => {
    return (
        <>
            <Container fluid>

                <Row>
                    <Col>
                        <Jumbotron />
                    </Col>
                </Row>
                <Row>
                    
                </Row>

            </Container>
        </>
    )
}

export default GridLayout;