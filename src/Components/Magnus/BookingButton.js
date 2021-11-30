import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import MovieContext from "./contexts/MovieContext"
import Seat from './Seat'


import './styles/Seat.css'

const BookingButt = (props) => {
    const { movies } = useContext(MovieContext)
    const context = useContext(MovieContext)


    const bookingClickHandler = () => {
        console.log(movies.seatNumbers)
        context.changeState({ ...movies, bookedSeats: movies.seatNumbers })


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
