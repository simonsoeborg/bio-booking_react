import { configure, makeAutoObservable, runInAction, toJS } from "mobx";

configure({ enforceActions: true })

class MovieStore {
  movies = [];
  movie = null;

  constructor() {
    makeAutoObservable(this);
  }

  getMoviesAsync = async () => {
    let movies = [];
    const response = await fetch(
      `https://uglyrage.com/api/Movie/`
    );
    const data = await response.json();

    runInAction(() => {
      movies = data;
    })

    return movies;
  }

  getMovieById = async (id) => {
    const response = await fetch(
      `https://uglyrage.com/api/Movie/${id}`
    );
    const data = await response.json();

    runInAction(() => {
      this.movie = data;
    }) 
  }

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

  deleteMovie(id) {
    fetch(`https://uglyrage.com/api/Movie/${id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((response) => console.log(response));
  }
}  

export default new MovieStore();
