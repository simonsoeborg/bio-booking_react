import React from "react";
import { Container, Row } from "react-bootstrap";
import Jumbotron from "./HomeComponents/Partials/jumbotron";
import MovieCards from "./HomeComponents/Partials/cards";

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
