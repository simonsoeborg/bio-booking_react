import React, { useState } from 'react';
import { Container, Row, Form, Button, Col, Card, Modal, Image } from "react-bootstrap"
import placehImg from '../images/posterPlaceholder.jpg';
import SeatMatrix from './SeatMatrix'
import SeatAvailability from './SeatAvailability'
import MovieContext from '../contexts/MovieContext'
import PriceCalculator from './PriceCalculator';
import BookingButt from './BookingButton';

function InfoSite() {
    const [movies, EditMovies] = useState({
		movieNames: {
			"Shang-Chi": 100,
			"Free Guy": 80,
			"Jaws": 110,
			"Interstellar": 120,
			"Dune": 100
		},
		moviePrice: 100,
		totalSeats: 0,
		seatNumbers: [],
        bookedSeats: []
	})
    return(
        <Container fluid style={{backgroundColor: '#96948f'}}>
            <Row style={{ justifyContent: 'left' }}>
                <Col>
                    <Image src={placehImg} thumbn style={{ width: '180px', height: '260px' }} />
                </Col>
            </Row>
            <Row style={{ justifyContent: 'left' }}>
                <Col xs={3} md={4}>
                    <Form>

                        <Form.Group >
                            <Form.Label>Navn</Form.Label>
                            <Form.Control type="fullname" placeholder="Indtast dit fulde navn" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <p></p>
                        <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                            <PriceCalculator />
                            <BookingButt />
                        </MovieContext.Provider>
                    </Form>
                </Col>
                <Col xs={3} md={{ span: 4, offset: 3 }}>
                    <p> Choose your seats </p>
                    <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                        <SeatAvailability />
                        <SeatMatrix />
                    </MovieContext.Provider>
                </Col>

            </Row>
            <Row style={{ justifyContent: 'right' }}>

            </Row>
        </Container>
    )

}


export default InfoSite;
