import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { MdEventSeat } from 'react-icons/md';
import { bs } from '../../Assets/Stores/BookingStore';
import './styles/Seat.css'

const Seats = (props) => {

    const [seatColor, setseatColor] = useState(`seat-grey`);
    const [ seatBooked, setSeatBooked ] = useState(null);
    const [clickable, setclickable] = useState(true)
    const [booked, setbooked] = useState(false)
    const [selected, setselected] = useState(false)
    const seatNumber = props.seatno
    const rowNumber = props.rowno
    const theaterId = props.theaterId
    if (booked) {
        this.setseatColor("seat-red")
        this.setclickable(false)
    }

    const seatClickHandler = (arg1, arg2) => {
        if (seatColor === 'seat-grey') {
            setselected(true)
            setseatColor('seat-black')
            setSeatBooked('Green');
            bs.Booking = {
                isBooked: true,
                theaterId: theaterId,
                rowNumber: rowNumber,
                seatNumber: seatNumber
            }
            bs.setBookingIntoArray(bs.Booking);
        }
        else if (seatColor === 'seat-black') {
            setselected(false)
            setseatColor('seat-grey')
            setSeatBooked('grey');
            bs.removeBookingFromArray(arg1, arg2);
        }

        if (booked) {
            setclickable(false)
        }
    }

    return (
        <Col>
            <Button disabled={!clickable} 
            style={{ margin: '0.25rem' }} 
            variant="outline-secondary" 
            className={`${seatColor}`} 
            onClick={(e) => seatClickHandler(rowNumber, seatNumber)}> 
                <MdEventSeat style={{ color: `${seatBooked}`}} /> 
            </Button>
        </Col >
    )
}

export default observer(Seats);
