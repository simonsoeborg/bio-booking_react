import { observable, runInAction, decorate } from "mobx";
import MovieService from "../Services/MovieService";

class MovieStore {
  constructor() {
    this.movieService = new MovieService();
  }

  state = {
    model: [],
  };
  status = "initial";
  searchQuery = "";

  getMoviesAsync = async () => {
    try {
      var params = {
        pageNumber: this.state.pageNumber,
        searchQuery: this.searchQuery,
        isAscending: this.state.isAscending,
      };
      const urlParams = URLSearchParams(Object.entries(params));
      const data = await this.movieService.get(urlParams);
      runInAction(() => {
        this.setState({ model: data });
        //this.state = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  getMovieAsync = async (id) => {
    try {
      const data = await this.movieService.get(id);
      runInAction(() => {
        this.setState({ model: data });
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  createMovieAsync = async (model) => {
    try {
      const response = await this.movieService.post(model);
      if (response.status === 201) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  updateMovieAsync = async (model) => {
    try {
      const response = await this.movieService.put(model);
      if (response.status === 200) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  deleteMovieAsync = async (id) => {
    try {
      const response = await this.movieService.delete(id);
      if (response.status === 204) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

function getState() {
  return this.state;
}
export default { MovieStore, getState };
