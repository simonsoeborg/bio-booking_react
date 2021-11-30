import { makeAutoObservable, observable } from "mobx";
import React, { useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { MdEventSeat } from 'react-icons/md'
import './styles/Seat.css'


const Seats = (props) => {
    makeAutoObservable(this)
    const [seatColor, setseatColor] = useState("seat-grey");
    const [clickable, setclickable] = useState(false)
    const [booked, setbooked] = useState(false)
    const seatNumber = props.seatNr


    const seatClickHandler = (seatNumber) => {
        this.setseatColor({ seatColor: "seat-black" })
        console.log("I have been clicked");

    }

    return (
        <Col>
            <Button style={{ margin: '0.25rem' }} variant="outline-secondary" onClick={(e) => seatClickHandler(props.seatNr)}  ><MdEventSeat /></Button>
        </Col>
    )
}

export default observable(Seats)
