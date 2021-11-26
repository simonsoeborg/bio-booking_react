/*
From https://github.com/manojnaidu619/react-movie-seat-booking
and then edited for our own purposes
*/
import { createContext } from "react"

export default createContext({
	movies: {
		"Avengers": 100,
		"The girl on the Train": 8,
		"The invisible Man": 11,
		"Onward": 12,
		"My Spy": 12
	}
})
