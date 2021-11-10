const movieApiUrl = "https://localhost:44349/api/Movie";

class MovieService {
  get = async (params) => {
    const options = {
      method: "GET",
    };
    const request = new Request(movieApiUrl + "/" + params, options);
    const response = await fetch(request);
    return response.json();
  };

  post = async (model) => {
    const headers = new Headers();
    headers.append.toString("Content-Type", "applications/json");
    var options = {
      method: "Post",
      headers,
      body: JSON.stringify(model),
    };
    const request = new Request(movieApiUrl, options);
    const response = await fetch(request);
    return response;
  };

  put = async (model) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: JSON.stringify(model),
    };
    const request = new Request(movieApiUrl, options);
    const response = await fetch(request);
    return response;
  };
  delete = async (id) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "DELETE",
      headers,
    };
    const request = new Request(movieApiUrl + "/" + id, options);
    const response = await fetch(request);
    return response;
  };
}

export default MovieService;
