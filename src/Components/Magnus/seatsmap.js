import SeatButton from "./seatbutton";

const Seats = ({seats, onToggle}) => {
    return (
        <>
        {seats.map((seatbutt, index)=>(
        <SeatButton key={{index}} seatbutt={seatbutt} onToggle={onToggle} />
        ))}
        </>
    )
}

export default Seats