import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class TheaterStore {
  theaters = [];
  theater = null;

  constructor() {
    makeAutoObservable(this);
    this.getTheatersAsync();
  }

  get Theaters() {
    return this.theaters;
  }

  get Theater() {
    return this.theater;
  }

  getTheatersAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/Theater/`);
    const data = await response.json();
    this.theaters = data;
  };

  getTheaterById = async (id) => {
    const response = await fetch(`https://uglyrage.com/api/Theater/${id}`);
    const data = await response.json();
    this.theater = data;
  };
}

export const ts = new TheaterStore();
