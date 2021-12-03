/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import React from "react"
import { bs } from '../../Assets/Stores/BookingStore';
import Loading from '../GlobalPartials/Loading';
import { observer } from "mobx-react-lite";

const PriceCalculator = (items) => {
	if(items.items === 0) {
		return <Loading />
	} else {
		const price = 100 * items.items;
		return (
			<div>
				<p>Pris {price} ,-</p>
			</div>
		)
	}
}

export default observer(PriceCalculator);
