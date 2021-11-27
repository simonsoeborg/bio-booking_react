import { configure, makeAutoObservable } from "mobx";
import { ts } from './TheaterStore';

configure({ enforceActions: true });

class SeatStore {
  seats = [];
  seat = null;
  rows = [];
  row = null;

  constructor() {
    makeAutoObservable(this);
  }

  get Seats() {
    return this.seats;
  }

  get Seat() {
    return this.seat;
  }
  
  get Rows() {
    return this.rows;
  }

  get Row() {
    return this.row;
  }

  getSeatsNRows = (theaterId) => {
    ts.Theaters.map((theater) => {
        if(theater.id === theaterId) {
            console.log(`Seats in ${theater.theaterName}: ${theater.theaterSeats}`)
            this.seats = theater.theaterSeats;
            this.rows = theater.theaterRows;
        }
    })
  };
}

export const ss = new SeatStore();
