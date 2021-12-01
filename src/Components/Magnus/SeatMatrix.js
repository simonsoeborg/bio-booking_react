/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React, { useState } from "react"

import './styles/Seat.css'
import { Row, Col, ListGroup } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { bs } from "../../Assets/Stores/BookingStore";
import Seat from "./Seats2";



const GenerateSeats = () => {
	const [hasLoaded, setHasLoaded] = useState(false);
	if (!hasLoaded) {
		setHasLoaded(true);
		bs.
			console.log("Has loaded")

	}
};


// Hent fra store
const SeatMatrix = () => {
	return (
		<div className="movie-complex">
			<p>Lærred</p>

			<Row>
				{/* {JSON.stringify(bs.Bookings)} */}

				{bs.Bookings.map((SeatNumber, i) => {
					return (
						<Seat seatno={SeatNumber} />
					)
				})}


			</Row>





		</div>
	)
}

export default observer(SeatMatrix);
