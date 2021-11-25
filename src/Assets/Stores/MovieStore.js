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

  updateMovie(id, model) {
    const response = fetch(`https://uglyrage.com/api/Movie/${id}`, {
      method: "PUT",
      mode: "cors",
      body: model,
    });
    if (response.status !== 200) {
      console.log(response);
    }
  }

  postMovie(model) {
    fetch(`https://uglyrage.com/api/Movie/${model}`, {
      method: "POST",
      mode: "cors",
      body: model,
    }).then((response) => console.log(response));
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
