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

  getSeatsAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/Seats/`);
    const data = await response.json();
    this.seats = data
  }

  getSeatsByTheater = async (Theater) => {
    const response = await fetch(`https://uglyrage.com/api/Seats/${Theater}`);
    const data = await response.json();
    this.seats = data
  }



  getSeatsNRows = (theaterId) => {
    ts.Theaters.map((theater) => {
      if (theater.id === theaterId) {
        console.log(`Seats in ${theater.theaterName}: ${theater.theaterSeats}`)
        this.seats = theater.theaterSeats;
        this.rows = theater.theaterRows;
      }
    })
  };
}

export const ss = new SeatStore();
