class MovieStore {
    constructor(initialState) {
        this.state = initialState;
    }

    setState(movie) {
        this.state = movie;
    }

    getState() {
        return this.state;
    }
}

const movieStore = new MovieStore({});

export default movieStore;