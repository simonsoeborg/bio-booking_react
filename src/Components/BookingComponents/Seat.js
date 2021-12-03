import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { MdEventSeat } from 'react-icons/md';
import { bs } from '../../Assets/Stores/BookingStore';
import './styles/Seat.css'

const Seats = (props) => {

    const [seatColor, setseatColor] = useState(`seat-grey`);
    const [ seatBooked, setSeatBooked ] = useState(null);
    const seatNumber = props.seatno
    const rowNumber = props.rowno
    const theaterId = props.theaterId

    const seatClickHandler = (arg1, arg2) => {
        if (seatColor === 'seat-grey') {
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
            setseatColor('seat-grey')
            setSeatBooked('grey');
            bs.removeBookingFromArray(arg1, arg2);
        }
    }

    return (
        <Col>
            <Button 
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
