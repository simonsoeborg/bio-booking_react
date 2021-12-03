import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class BookingStore {
  bookings = [];
  booking = null;
  booked = false;

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
  get Booked() {
    return this.booked;
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

  updateBookings = async () => {

  }
}

export const bs = new BookingStore();
