import defaultImg from '../images/default-movie.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

function CheckArgument(arg) {
    if (arg.title == null) {
        return (
            <DefaultMoviePage />
        )
    } else {
        return (
            <LoadedMoviePage />
        )
    }


}

function LoadedMoviePage(arg) {
    return (
        <>
        </>
    )
}

function DefaultMoviePage(arg) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={6} md={4} >
                        <Image id="default-img" src={defaultImg} rounded />
                    </Col>
                    <Col xs={6} md={6} >
                        <Row>
                            <h1>Movie Title</h1>
                        </Row>
                        <Row>
                            <p>Movie Description
                            <br />I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, undersøgte et af de mindst kendte ord "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær i renæssancen, er en afhandling om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje i afsnit 1.10.32.
                            </p>
                        </Row>
                        <Row>
                        <Col>
                            <h4>IMDB Rating</h4>
                        </Col>
                        <Col>
                            <h4>Movie Director, Movie Actors</h4>
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <h2>Movie Play Times</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CheckArgument;