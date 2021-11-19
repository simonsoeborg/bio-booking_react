import { makeAutoObservable, observable, runInAction } from "mobx";
import api from "../api";

const movieApiUrl = "Movie/";

class MovieStore {
  constructor() {
    makeAutoObservable(this, {
      movies: observable,
      movie: observable,
    }, {
      autoBind: true
    });
    this.getMovies();
    //this.getMovieById(1);
  }

  getMovies() {
    api.api.get(movieApiUrl).then((response) => {
      console.log("MovieStore get Data: " + response.data);
      this.movies = response.data;
    });
  }

  getMovieById(id) {
    api.api.get(movieApiUrl + id).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
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
