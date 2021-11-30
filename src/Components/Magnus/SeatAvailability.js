/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import Seat from './Seat'
import './styles/Seat.css'

const SeatAvailability = () => {
	return (
		<div className="row">
			Ledige : <Seat style="seat-grey" />
			Valgte : <Seat seatColor="seat-black" />
			Optaget : <Seat className="Button" style="seat-red" />
		</div>
	)
}

export default SeatAvailability
