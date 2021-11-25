import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class BookingStore {
  bookings = [];
  booking = null;

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
}

export const bs = new BookingStore();
