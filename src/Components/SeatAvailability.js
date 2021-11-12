/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (
		<div className="row">
			Available : <Seat seatColor="seat-grey" />
			Selected : <Seat seatColor="seat-black" />
			Booked : <Seat seatColor="seat-red"/>
		</div>
	)
}

export default SeatAvailability
