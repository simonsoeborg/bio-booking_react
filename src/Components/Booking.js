import React, { useState } from 'react';
import { Container, Button, Accordion, Form, Col, Row, Image } from "react-bootstrap"
import { observer } from 'mobx-react-lite'
import PriceCalculator from './Magnus/PriceCalculator';
import SeatAvailability from './Magnus/SeatAvailability';
import SeatMatrix from './Magnus/SeatMatrix';
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


/*
const ChangeProgressState = (value) => {
    const [progress, setProgress] = useState(0); 

    if(value !== progress) {
        setProgress(progress + value)
    }

    return progress;
}

const Booking = () => {
    const { id } = useParams();  
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasMovieId, setHasMovieId ] = useState(false)

    const now = ChangeProgressState(0);

    if (!hasLoaded) {
        setHasLoaded(true);

        if( id !== undefined && !hasMovieId ) {
            setHasMovieId(true);
        }
    }

    if(!hasMovieId) {
        return (
            <Container>
                { ms.Movie === null ? null : <Image id="default-img" src={placehImg} rounded /> }
                <Row className="justify-content-md-center">
                    <Accordion style={{ width: '40rem', margin: '1rem'}} defaultActiveKey={ hasMovieId ? "3" : "0" }>
                        { !hasMovieId ?
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Vælg film</Accordion.Header>
                            <Accordion.Body>
                            <Form.Select>
                                <option>Vælg film</option>
                                { toJS(ms.Movies).map((movie, index) => {
                                    <option value={index+1}>{movie.movieName}</option>
                                })}
                            </Form.Select>
                            </Accordion.Body>
                        </Accordion.Item> : null
                        }   
                        { !hasMovieId ?
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Vælg tidspunkt</Accordion.Header>
                            <Accordion.Body>
                            <Form.Select>
                                <option>Vælg tidspunkt</option>
                                { toJS(ms.Movies).map((movie) => {
                                    { movie.movieFeaturesDates.split(",").map((time, index) => {
                                        <option value={index+1}>{time}</option>
                                    })}
                                })}
                            </Form.Select>
                            </Accordion.Body>
                        </Accordion.Item> : null
                        }   
                        { !hasMovieId ?
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Vælg plads(er)</Accordion.Header>
                            <Accordion.Body>
                            { 
                                // Først vælg antal af pladser
                                // derefter vælg placering af pladser 
                            }
                            <Form.Select>
                                <option>Vælg antal af pladser</option>
                                {[...Array(10)].map((x, i) => 
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )}
                            </Form.Select>
                            <Seat />
                            </Accordion.Body>
                        </Accordion.Item> : null
                        }
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Indtast dine oplysninger</Accordion.Header>
                            <Accordion.Body>
                                <MovieUserInfoForm />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row className="justify-content-md-center">
                        <Container style={{ width: '40rem', margin: '1rem', paddingRight: '2rem', paddingLeft: '2rem'}}>
                            <ProgressBar animated now={now} label={`${now}%`} />
                        </Container>
                    </Row>
                </Row>
            </Container>
        )
    } else {

        return (
            <Container>
                <Col>
                    <Image id="default-img" src={`${ms.Movie.posterURL}`} rounded />
                </Col>
                <Col className="BookingProcess">
                <Accordion defaultActiveKey={ hasMovieId ? "1" : "0" }>
                    { !hasMovieId ?
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Vælg film</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item> : null
                    }
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <ProgressBar animated now={now} label={`${now}%`} />
                </Col>
            </Container>
        )
    }


}

const MoviesToSelectForm = (movies) => {
    console.log(movies.movies)
    if(movies.movies || movies.movies.length < 1) {
        return <h2>loading...</h2>
    }
    else {
        console.log(movies.movies)
        return (
            <Form.Select>
                <option>Vælg film</option>
                { movies.movies.map((movie, index) => {
                    <option value={index+1}>{movie.movieName}</option>
                })}
            </Form.Select>
        )
    }
}

 */

/*

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
        seatNumbers: []
    })

<Container fluid style={{ backgroundColor: '#96948f' }}>
            <Row style={{ justifyContent: 'left' }}>
                <Col>
                    <Image src={placehImg} thumbn style={{ width: '180px', height: '260px' }} />
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={3}>
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
                <Col xs={3}>
                    <p> Choose your seats </p>
                    <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                        <SeatAvailability />
                        <SeatMatrix />
                    </MovieContext.Provider>
                </Col>
            </Row>
        </Container>

*/

const MovieUserInfoForm = () => {
    return (
        <Row className="justify-content-md-center">
            <Container style={{ width: '25rem' }}>
                <Form>
                    <Form.Group style={{ margin: '1rem' }} >
                        <Form.Label>Indtast dit navn</Form.Label>
                        <Form.Control type="fullname" />
                    </Form.Group>
                    <Form.Group style={{ margin: '1rem' }} >
                        <Form.Label>Indtast din mail-adresse</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </Form>
            </Container>
        </Row>
    )
}