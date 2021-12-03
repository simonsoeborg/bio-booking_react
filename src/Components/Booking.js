import React, { useState } from 'react';
import { Container, ProgressBar, Accordion, Form, Col, Row, Modal, Image, Button } from "react-bootstrap"
import { observer } from 'mobx-react-lite'
import placehImg from '../images/posterPlaceholder.jpg';
// import { toJS } from 'mobx';
// import { useParams } from "react-router";
// import { ms } from '../Assets/Stores/MovieStore';
// import { ss } from '../Assets/Stores/SeatStore';
// import Seat from './BookingComponents/SeatComponent';
import SeatMatrix from './Magnus/SeatMatrix';

function BookingModal(props) {
    return (
        <Modal {...props}
            size="sm"
            centered
        >
            <Modal.Body>
                Your booking has been made
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>OK</Button>
            </Modal.Footer>
        </Modal>
    );
}
const Booking = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <Row style={{ justifyContent: 'left' }}>
                <Col>
                    <Image src={placehImg} thumbn style={{ width: '180px', height: '260px' }} />
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
                                    <Form.Control type="fullname" placeholder="Indtast dit fulde navn" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Vælg sæde(r)</Accordion.Header>
                        <Accordion.Body>
                            <SeatMatrix />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Bekræftelse</Accordion.Header>
                        <Accordion.Body>
                            <p></p>

                            <Button variant="success" onClick={() => setShow(true)}>Bekræft ordre</Button>
                            <BookingModal show={show}
                                onHide={() => setShow(false)} />
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