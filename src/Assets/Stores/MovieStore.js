import { makeAutoObservable, observable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import api from "../api";

const movieApiUrl = api.movieUrl;

class MovieStore {
  constructor() {
    makeAutoObservable(this, { movies: observable, movie: observable });
    this.getMovies();
  }

  getMovies() {
    fetch(movieApiUrl).then((response) =>
      response.json().then((json) => runInAction(() => (this.movies = json)))
    );
    return this.movies;
  }

  getMovieById(id) {
    fetch(movieApiUrl + id).then((response) =>
      response.json().then((json) => runInAction(() => (this.movie = json)))
    );
  }

  updateMovie(id, model) {
    fetch(movieApiUrl + id, {
      method: "PUT",
      mode: "cors",
      body: model,
    }).then((response) => console.log(response));
  }

  postMovie(model) {
    fetch(movieApiUrl, {
      method: "POST",
      mode: "cors",
      body: model,
    }).then((response) => console.log(response));
  }

  deleteMovie(id) {
    fetch(movieApiUrl + id, {
      method: "DELETE",
      mode: "cors",
    }).then((response) => console.log(response));
  }
}

const movieStore = new MovieStore();

export default movieStore;
