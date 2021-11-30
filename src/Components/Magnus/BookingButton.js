import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Seat from './Seats2'


import './styles/Seat.css'

const BookingButt = (props) => {



    const bookingClickHandler = () => {



    }
    return (
        <div>
            <Button variant="success"
                onClick={bookingClickHandler}>
                Place booking
            </Button>
        </div>
    )
}

export default BookingButt
