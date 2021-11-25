import { configure, makeAutoObservable, runInAction } from "mobx";

configure({ enforceActions: true });

class MovieStore {
  movies = [];
  movie = null;

  constructor() {
    makeAutoObservable(this);
    this.getMoviesAsync();
  }

  get Movies() {
    return this.movies;
  }

  get Movie() {
    return this.movie;
  }

  getMoviesAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/Movie/`);
    const data = await response.json();
    this.movies = data;
  };

  getMovieById = async (id) => {
    const response = await fetch(`https://uglyrage.com/api/Movie/${id}`);
    const data = await response.json();
    this.movie = data;
  };

  updateMovie = async (id, model) => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/Movie/${id}`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getMoviesAsync();
    return response.status;
  }

  postMovie = async (model) => {
    console.log(model)
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/Movie/`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getMoviesAsync();
    return response.status;
  }

  deleteMovie = async (id) => {
    const res = await fetch(`https://uglyrage.com/api/Movie/${id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 204) {
      console.log(res);
    }
    this.getMoviesAsync();
  };
}

export const ms = new MovieStore();
