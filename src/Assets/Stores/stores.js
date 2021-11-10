import { ResourceStore } from "@reststate/mobx";
import api from "../api";

const movieApi = api + "/Movie";

const movieStore = new ResourceStore({
  name: "movie",
  httpClient: movieApi,
});

export { movieStore };
