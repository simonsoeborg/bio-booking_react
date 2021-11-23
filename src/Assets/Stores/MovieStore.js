import { configure, makeAutoObservable, runInAction } from "mobx";

configure({ enforceActions: true });

class MovieStore {
  movies = [];
  movie = null;

  constructor() {
    makeAutoObservable(this);
  }

  getMoviesAsync = async () => {
    let movies = [];
    const response = await fetch(`https://uglyrage.com/api/Movie/`);
    const data = await response.json();

    runInAction(() => {
      movies = data;
    });

    return movies;
  };

  getMovieById = async (id) => {
    let movie = null;
    const response = await fetch(`https://uglyrage.com/api/Movie/${id}`);
    const data = await response.json();

    runInAction(() => {
      movie = data;
    });

    return movie;
  };

  updateMovie(id, model) {
    fetch(`https://uglyrage.com/api/Movie/${id}`, {
      method: "PUT",
      mode: "cors",
      body: model,
    }).then((response) => console.log(response));
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

    if (res.state !== 204) {
      console.log(res);
    }
  };
}

export default new MovieStore();
