/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import Seat from './Seat'
import './styles/Seat.css'
import { Col, Button, Row } from 'react-bootstrap';
import { MdEventSeat } from 'react-icons/md';

const SeatAvailability = () => {
	return (
		<Row>
				<Col>
					Ledige: 
				</Col>
				<Col>
					<Button 
					style={{ margin: '0.25rem' }} 
					variant="outline-secondary" 
					className={`seat-grey`}> 
						<MdEventSeat style={{ color: `grey`}} /> 
					</Button>
				</Col>
				
				<Col>
					Valgte: 
				</Col>
				<Col>
					<Button 
					style={{ margin: '0.25rem' }} 
					variant="outline-secondary" 
					className={`seat-black`}> 
						<MdEventSeat style={{ color: `green`}} /> 
					</Button>
				</Col>
				
				<Col>
					Optaget: 
				</Col>
				<Col>
					<Button 
					style={{ margin: '0.25rem' }} 
					variant="outline-secondary" 
					className={`seat-red`}> 
						<MdEventSeat style={{ color: `black`}} /> 
					</Button>
				</Col>
		</Row>
	)
}

export default SeatAvailability
