/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (
		<div className="row">
			Ledige : <Seat seatColor="seat-grey" />
			Valgte : <Seat seatColor="seat-black" />
			Optaget : <Seat seatColor="seat-red"/>
		</div>
	)
}

export default SeatAvailability
