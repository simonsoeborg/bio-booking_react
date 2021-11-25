import { configure, makeAutoObservable, observable, runInAction, toJS } from "mobx";


class BookingStore {
    seats = []
    bookedseats = []


    constructor() {
        makeAutoObservable(this)
    }

    getSeats() {
        return this.users;
    }

    setSeats(seats) {
        this.seats = seats;

    }

    getBookedseats = async () => {
        let bookedseats = [];
        const response = await fetch(
            `https://uglyrage.com/api/Theatre`
        );
        const data = await response.json();

        runInAction(() => {
            bookedseats = data;
        })
        return bookedseats;
    }

    setBookedseats(bookedseats) {
        this.bookedseats = bookedseats;
    }


}
export default new BookingStore();
