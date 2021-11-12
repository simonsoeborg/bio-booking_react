import React from "react";
import { Container, Row } from "react-bootstrap";
import Jumbotron from "./jumbotron";
import MovieCards from "./cards";

const GridLayout = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Jumbotron />
      </Row>
      <MovieCards />
    </Container>
  );
};

export default GridLayout;
