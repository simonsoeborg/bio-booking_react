import axios from "axios";
import { Component } from "react";
import MovieStore from '../Stores/MovieStore';

const movieApi = axios.create({
    baseURL: 'https://localhost:44349/api/Movie'
});

const movieStore = MovieStore.movieStore;

class Movies extends Component {

    state = {
        movies: [],
        movie: JSON
    }


    getMovies = async () => {
        movieApi.get('/').then(res => {
            movieStore.setState({ movies: res.data })
        });
    }

    getMovie = async (id) => {
        console.log(id)
        let data = await movieApi.get(`/${id}`);
        console.log(data.data)

        return data.data;
    }

    createMovie = async () => {
        movieApi.post('/', {movieName: 'Avengers', movieReleaseDate: '09/11/2021', movieFeatureDates: 'Mon, Wed, Sat', posterImageString: '../images/avengers.jpg'})
    }
}

const movies = new Movies({});
export default movies;