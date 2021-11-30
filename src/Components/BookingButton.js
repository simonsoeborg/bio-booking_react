import { Button } from 'react-bootstrap'
import React from 'react'
import Seat from './Seat'
import { bs } from '../Assets/Stores/BookingStore'


import './styles/Seat.css'

const BookingButt = (props) => {




    const bookingClickHandler = (seatNumbers) => {
        console.log("Selected seats: " + movies.seatNumbers)
        context.changeState({ ...movies, bookedSeats: movies.seatNumbers })
        console.log("Booked seats: " + movies.bookedSeats)

    }
    return (
        <div>
            <Button variant="success"
                onClick={bookingClickHandler}>
                Place booking for {movies.totalSeats} seats
            </Button>
        </div>
    )
}

export default BookingButt
