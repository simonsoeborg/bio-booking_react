import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { MdEventSeat } from 'react-icons/md'
import './styles/Seat.css'


const Seats = (props) => {

    const [seatColor, setseatColor] = useState(`seat-grey`);
    const [clickable, setclickable] = useState(true)
    const [booked, setbooked] = useState(false)
    const [selected, setselected] = useState(false)
    const seatNumber = props.seatno
    if (booked) {
        this.setseatColor("seat-red")
        this.setclickable(false)
    }



    const seatClickHandler = () => {
        if (seatColor === 'seat-grey') {
            setselected(true)
            setseatColor('seat-black')
        }
        else if (seatColor === 'seat-black') {
            setselected(false)
            setseatColor('seat-grey')
        }

        if (booked) {
            setclickable(false)
        }

        console.log("I have been clicked");

        console.log(seatColor)
        console.log(selected)


    }

    return (
        <Col>
            <Button disabled={!clickable} style={{ margin: '0.25rem' }} variant="outline-secondary" className={`${seatColor}`} onClick={(e) => seatClickHandler(e, seatNumber)}> <MdEventSeat /> </Button>
        </Col >
    )
}

export default observer(Seats);
