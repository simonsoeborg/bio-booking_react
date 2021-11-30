/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React, { useState } from "react"
import Seat from './Seat'
import './styles/Seat.css'
import { Row, Col } from 'react-bootstrap';
import { ts } from "../../Assets/Stores/TheaterStore"
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { bs } from "../../Assets/Stores/BookingStore";


// Hent fra store
const GenerateSeats = () => {
	const [hasLoaded, setHasLoaded] = useState(false);
	if (!hasLoaded) {
		setHasLoaded(true);
		bs.
			console.log("Has loaded")

	}
};



const SeatMatrix = () => {
	return (
		<div className="movie-complex">
			<p>Lærred</p>

			<Row>
				{JSON.stringify(bs.Bookings)}
				{bs.Bookings.map((SeatNumber) => {
					return <Seat seatno={SeatNumber} />
				})}
			</Row>
		</div>
	)
}

export default observer(SeatMatrix);
