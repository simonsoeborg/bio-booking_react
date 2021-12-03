import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class BookingStore {
  bookings = [];
  booking = null;
  newBookings = [];

  constructor() {
    makeAutoObservable(this);
    this.getBookingsAsync();
  }

  get Bookings() {
    return this.bookings;
  }

  get Booking() {
    return this.booking;
  }

  get NewBookings() {
    return this.newBookings;
  }
  
  get NewBookingsCount() {
    return this.newBookings.length;
  }

  set Booking(booking) {
    this.booking = booking;
  }

  setBookingIntoArray = () => {
    this.newBookings.push(this.Booking);
  } 

  removeBookingFromArray = (rowNumber, seatNumber) => {
    for(var i = 0; i < this.newBookings.length; i++) {
      if(this.newBookings[i].rowNumber === rowNumber && this.newBookings[i].seatNumber === seatNumber) {
        this.newBookings.splice(i, 1);
      }
    }
    
  }

  prepareDataToDB = async () => {
    if(this.newBookings.length > 0) {
      for(var i = 0; i < this.newBookings.length; i++) {
        await this.updateBooking(this.newBookings[i])
      }
    }
  }

  getBookingsAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/Booking/`);
    const data = await response.json();
    this.bookings = data;
  };

  getBookingById = async (id) => {
    const response = await fetch(`https://uglyrage.com/api/Booking/${id}`);
    const data = await response.json();
    this.booking = data;
  };

  updateBooking = async (id, booking) => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: booking
    }
    const request = new Request(`https://uglyrage.com/api/Booking/${id}`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getBookingsAsync();
  }
}

export const bs = new BookingStore();
