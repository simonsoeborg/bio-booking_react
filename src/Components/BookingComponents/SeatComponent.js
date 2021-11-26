import { useState } from "react"
import { ts } from '../../Assets/Stores/TheaterStore';
import { MdEventSeat } from 'react-icons/md'
import { Button, ButtonGroup, ButtonToolbar, Container,Col, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const Seat = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    if (!hasLoaded) {
      setHasLoaded(true);
      ts.getTheaterById(1);
    }

    if(!ts.Theater || ts.Theater.length < 1) {
        return <h1>Loading..</h1>
    } else {
        const rows = toJS(ts.Theater).theaterRows;
        const seats = toJS(ts.Theater).theaterSeats;
        console.log(toJS(ts.Theater))
        console.log("Rows " + rows);
        console.log("Seats " + seats);
        return (
            <Container>
                { [...Array(rows)].map((x, i) => (
                    <DataHandler row={x} seats={ (seats / rows)} /> 
                ))}
            </Container>
        )
    }
}

const DataHandler = (row, seats) => {
    return (
        <div key={row + "|" + seats}>
            <Col xs={1}>
                <Row>{row}</Row>
            </Col>
            <Col xs={11}>
                <Row>
                <ButtonToolbar>
                    <ButtonGroup>
                        { [...Array(seats)].map((x, i) => {
                            <Button key={`r${row},s${i}`} variant="outline-secondary"><MdEventSeat /></Button>
                        })}
                    </ButtonGroup>
                </ButtonToolbar>
                </Row>
            </Col>
        </div>
    )
} 

export default observer(Seat);