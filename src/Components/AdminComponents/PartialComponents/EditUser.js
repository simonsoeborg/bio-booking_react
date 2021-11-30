import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Form, Image, Col, Row, Button, Modal } from "react-bootstrap";
import { us } from "../../../Assets/Stores/UserStore";
import Loading from "../../GlobalPartials/Loading";


const EditUser = () => {
    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [success, setSuccess] = useState(false)
  
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const handleOnShow = () => setShowModal(true);
  
    const history = useHistory();
  
    if (!hasLoaded) {
      setHasLoaded(true);
      us.getUserById(id);
    }
  
    const handleReturnClick = () => {
      history.push("/admin")
    }
  
    const onFormSubmit = (id, data) => {
      let res = us.updateUser(id, data);
      if(res === 204) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
  
      handleOnShow();
    };
  
    if (!us.User) return <Loading />
    else {
      const toggleAdmin = () => {
        if(!us.User.admin) {
          us.User.admin = true;
        } else {
          us.User.admin = false;
        }
      }

      return (
        <Container>
          <Row>
            <Col>
              <Container style={{ padding: "1rem" }}>
                <Image
                  variant="top"
                  src={us.User.picture}
                  style={{ width: "180px", height: "260px" }}
                />
              </Container>
            </Col>
            <Col>
              <Container
                style={{
                  contentAlign: "center",
                  textAlign: "left",
                  placeContent: "center",
                  width: "75%",
                }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                      size="sm" 
                      type="text"
                      placeholder={us.User.id}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Fornavn</Form.Label>
                    <Form.Control
                      size="sm" 
                      type="text"
                      defaultValue={us.User.given_Name}
                      onChange={(e) => {
                        us.User.given_Name = e.target.value;
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Efternavn</Form.Label>
                    <Form.Control
                      size="sm" 
                      type="text"
                      defaultValue={us.User.family_Name}
                      onChange={(e) => {
                        us.User.family_Name = e.target.value;
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      size="sm" 
                      type="text"
                      defaultValue={us.User.email}
                      onChange={(e) => {
                        us.User.email = e.target.value;
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      inline
                      defaultChecked={us.User.email_Verified}
                      label="Email bekræftet?"
                      disabled
                      type="checkbox"
                      onChange={(e) => {
                        us.User.email_Verified = e.target.value;
                      }}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      inline
                      defaultChecked={us.User.admin}
                      label="Admin?"
                      type="checkbox"
                      onChange={() => toggleAdmin()}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>URL Profil billede</Form.Label>
                    <Form.Control
                      size="sm" 
                      type="text"
                      defaultValue={us.User.picture}
                      onChange={(e) => {
                        us.User.picture = e.target.value;
                      }}
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="outline-success"
                      style={{ margin: '1rem'}}
                      onClick={() => onFormSubmit(us.User.id, JSON.stringify(us.User))}
                    >
                      Rediger
                    </Button>
                  </div>
                </Form>
              </Container>
            </Col>
          </Row>
          <Modal show={showModal} onHide={handleOnClose}>
            <Modal.Header closeButton>
              { success ? <Modal.Title>Error!</Modal.Title> : <Modal.Header>Success!</Modal.Header>}
            </Modal.Header>
              { success ? <Modal.Body>Der gik noget galt, da vi prøvede at opdatere: { us.User.given_Name + " " + us.User.family_Name } </Modal.Body> : <Modal.Body>{ us.User.given_Name + " " + us.User.family_Name } er nu opdateret! </Modal.Body>}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleOnClose && handleReturnClick}>
                Luk
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
  
  
      );
    }
  };
  
  export default observer(EditUser);
  