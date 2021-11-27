/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import Seat from './Seat'
import './styles/Seat.css'
import { Row, Col } from 'react-bootstrap';


const GenerateSeats = (seatNumbers) => {
	return (
		<Row>
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</Row>
	)
}

const SeatMatrix = () => {
	return (
		<div className="movie-complex">
			<p>Lærred</p>
			<Row>
				<Col>
					{GenerateSeats([1,2,3,4])}
					{GenerateSeats([5,6,7,8])}
				</Col>
				<Col>
					{GenerateSeats([33,34,35,36])}
					{GenerateSeats([37,38,39,40])}
				</Col>

			</Row>
		</div>
	)
}

export default SeatMatrix

/*
			<div className="container row movie-layout">
				<div className="movie-column-1">
					{GenerateSeats([1,2,3,4])}
					{GenerateSeats([5,6,7,8])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([33,34,35,36])}
					{GenerateSeats([37,38,39,40])}
				</div>

			</div>

*/