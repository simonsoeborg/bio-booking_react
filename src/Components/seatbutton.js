import { makeAutoObservable, observable } from "mobx"
import {useState} from 'react'
import {Button} from 'react-bootstrap';

const SeatButton = ( {seatbutt, onToggle}) => {
    return(
        <div className={`seatbutt ${seatbutt.occ ? 'occ' : ''}`}
        onClick={()=> onToggle(seatbutt.id)} 
        >
            <h3>
                {seatbutt.text}{' '}
            
            </h3>
            
            
        </div>
    )
}

export default SeatButton