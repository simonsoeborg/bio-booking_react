/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React, { useState } from "react"

import './styles/Seat.css'
import { Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { bs } from "../../Assets/Stores/BookingStore";
import Seat from "./Seat";
import Loading from '../GlobalPartials/Loading';

// Hent fra store
const SeatMatrix = () => {
	if(!bs.Bookings || bs.Bookings.length < 1) {
		return <Loading />
	} else {
		return (
			<div className="movie-complex">
				<p style={{ marginBottom: "5rem" }}>Lærred</p>
				<Row>
					{bs.Bookings.map((SeatNumber) => {
						return (
							<Seat key={SeatNumber.id} seatId={SeatNumber.id} seatno={SeatNumber.seatNumber} rowno={SeatNumber.rowNumber} theaterId={SeatNumber.theaterId}/>
						)
					})}
				</Row>

			</div>
		)
	}
}

export default observer(SeatMatrix);
