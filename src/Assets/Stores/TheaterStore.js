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

  updateTheater = async (id, model) => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/Theater/${id}`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getTheatersAsync();
    return response.status;
  }

  postTheater = async (model) => {
    console.log(model)
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/Theater/`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getTheatersAsync();
    return response.status;
  }

  deleteTheater = async (id) => {
    const res = await fetch(`https://uglyrage.com/api/Theater/${id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 204) {
      console.log(res);
    }
    this.getTheatersAsync();
  };
}

export const ts = new TheaterStore();
