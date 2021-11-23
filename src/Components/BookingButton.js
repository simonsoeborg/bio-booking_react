import {Button} from 'react-bootstrap'
import React, {useContext} from 'react'
import MovieContext from "../contexts/MovieContext"
import Seat from './Seat'

import './styles/Seat.css'

const BookingButt = (props) =>{
    const { movies } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno



    const bookingClickHandler=(seatNumbers)=>{
        console.log("Selected seats: " + movies.seatNumbers)
        context.changeState({...movies, bookedSeats: movies.seatNumbers})
        console.log("Booked seats: " + movies.bookedSeats)

    }
    return(
    <div>
        <Button variant="success"
        onClick={bookingClickHandler}>
            Place booking for {movies.totalSeats} seats
        </Button>
    </div>
    )
}

export default BookingButt
