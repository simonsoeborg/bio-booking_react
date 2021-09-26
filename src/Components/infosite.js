import React, {useState} from 'react';
import {Container, Row, Form, Button, Col, Card, Modal} from "react-bootstrap"

function SeatModal (props){
    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton color="blue">
          <Modal.Title id="contained-modal-title-vcenter">
            Vælg sæde
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Container>
            <Row>
            <Col>
                <Card border="success" style={{width: '8rem'}}> 
                    <Card.Body>
                        <Card.Text>Række 1, Sæde 3</Card.Text>
                    </Card.Body>
                </Card>
                
                <Card border="success" style={{width: '8rem'}}> 
                    <Card.Body>
                        <Card.Text>Række 1, Sæde 4</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
}

function InfoSite () {
    const [modalShow, setModalShow] = useState(false);
    return(
        <Container fluid>
            <Row xs={3} md={2}>
            <Col md={{ span: 5, offset: 1}}>
                <Form>

                    <Form.Group >
                        <Form.Label>Navn</Form.Label>
                        <Form.Control type="fullname" placeholder="Indtast dit fulde navn" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                
                    <Form.Group>
                        <Form.Label>Sæder</Form.Label>
                        <Form.Select>
                            <option >Vælg antal sæder</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </Form.Select>
                    </Form.Group>
                    <p></p>
                    <Button variant="outline-primary" type="submit">
                        Place Booking
                    </Button>
                    <Button variant="outline-secondary" onClick={()=> setModalShow(true)}>Valg af sæder</Button>
                    <SeatModal show= {modalShow} onHide={() => setModalShow(false)}/>
                </Form>
            </Col>

            </Row>
        </Container>
        

    )


}

export default InfoSite;



