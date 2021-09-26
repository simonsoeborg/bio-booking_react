import {Container, Row, Form, Button, Col, Card} from "react-bootstrap"



const InfoSite = () =>{
    return(
        <Container>
            <Row xs={3} md={2}>
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
                <Button variant="outline-primary" type="submit">
                    Place Booking
                </Button>
            </Form>
            </Row>
            <Row xs={2} md={3}>
                <Col md={{span: 3, offset: 10}}>
                    <Card border="success" style={{width: '10rem'}}> 
                        <Card.Body>
                            <Card.Text>Række 1, Sæde 3</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        

    )


}

export default InfoSite;



