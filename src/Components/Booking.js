import React, { useState } from 'react';
import { Container, Button, Accordion, Form, Col, Row, Image } from "react-bootstrap"
import { observer } from 'mobx-react-lite'
import PriceCalculator from './BookingComponents/PriceCalculator';
import SeatAvailability from './BookingComponents/SeatAvailability';
import SeatMatrix from './BookingComponents/SeatMatrix';
import { bs } from '../Assets/Stores/BookingStore';
import { nbs } from '../Assets/Stores/NewBookingStore';
import { ms } from '../Assets/Stores/MovieStore';
import { useParams } from 'react-router';
import Loading from './GlobalPartials/Loading';

const Booking = () => {
    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [name, setNames] = useState(null);
    const [email, setEmails] = useState(null);
    const dateTime = new Date().toISOString().slice(0, 19).replace(' ', 'T');
    let temp = null;

    const setName = (value) => {
        temp = value;
        setNames(temp);
    }

    const setEmail = (value) => {
        temp = value;
        setEmails(temp);
    }
    
    if (!hasLoaded) {
        setHasLoaded(true);
        ms.getMovieById(id);
    }

    const [items, setItems] = useState(0);

    const setTotalItems = () => {
        setItems(bs.NewBookingsCount);
        // console.log(bs.NewBookingsCount)
    }

    const bookingClickHandler = () => {
        console.log("bookingClickHandler")
        console.log(name)
        console.log(email)
        console.log(dateTime)
        console.log(bs.NewBookingsCount)
        // Get Name and Email turn into sessionId
        if(name !== null && email !== null) {
            console.log("Step 1")
            const sessionId = dateTime+"__"+name+"/"+email;
            if(bs.NewBookingsCount > 0) {
                console.log("Step 2")
                for (var i = 0; i < bs.NewBookingsCount; i++) {
                    console.log("Step 3")
                    nbs.NewBooking = {
                        movieId: id,
                        bookingDate: dateTime,
                        seat: bs.NewBookings[i].seatNumber,
                        trow: bs.NewBookings[i].rowNumber,
                        sessionId: sessionId
                    }

                    nbs.postNewBooking(nbs.NewBooking);
                }

                alert("Success")
            }
        }
    }
    if(!ms.Movie) {
        return <Loading />
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Image src={ms.Movie.posterURL} thumbn style={{ width: '180px', height: '260px' }} />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Accordion style={{ width: '40rem', margin: '1rem' }} defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Indtast dine oplysninger</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Navn</Form.Label>
                                    <Form.Control type="fullname" placeholder="Indtast dit fulde navn" onChange={(e) => setName(e.target.value) } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value) } />
                                </Form.Group>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Vælg sæde(r)</Accordion.Header>
                        <Accordion.Body>
                            <SeatAvailability />
                            <SeatMatrix />


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header onClick={() => setTotalItems()}>Bekræftelse</Accordion.Header>
                        <Accordion.Body>
                            <p></p>
                            <PriceCalculator items={items} />
                            
                            <Button variant="success"
                                onClick={() => bookingClickHandler()}>
                                Book
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    )
}

export default observer(Booking);