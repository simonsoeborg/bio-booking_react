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
import { MdEventSeat } from "react-icons/md"
import { Button } from 'react-bootstrap'




// Hent fra store
const SeatMatrix = () => {

	return (

		<div className="movie-complex">
			<Row>
				Ledige : <Button disabled={true} variant="secondary" style={{ width: "50px" }} ><MdEventSeat /></Button>
				Valgte : <Button disabled={true} variant="success" style={{ width: "50px" }} ><MdEventSeat /></Button>
				Optaget : <Button disabled={true} variant="danger" style={{ width: "50px", }} ><MdEventSeat /></Button>
			</Row>
			<p>Lærred</p>

			<Row>

				{bs.Bookings.map(booking => {
					return (
						<Seat>{booking.id}</Seat>
					)
				})}


			</Row>





		</div>
	)
}

export default observer(SeatMatrix);
