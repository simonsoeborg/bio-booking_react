import { configure, makeAutoObservable, observable, runInAction, toJS } from "mobx";


class BookingStore {
    seats = []
    bookedseats = []


    constructor() {
        makeObservable(this, {
            seats: observable,
            bookedseats: observable,
        })
    }

    getSeats() {
        return this.users;
    }

    setSeats(seats) {
        this.seats = seats;

    }

    getBookedseats() {
        return this.bookedseats;
    }

    setBookedseats(bookedseats) {
        this.bookedseats = bookedseats;
    }


}
