import { observer } from "mobx-react-lite"
import { toJS } from 'mobx';
import { useHistory } from "react-router";
import { CardGroup, Card, Spinner } from "react-bootstrap";
import { ms } from '../../Assets/Stores/MovieStore';

const DisplayMovieCards = () => {
    const displayMovies = []
    // New date to compare
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const history = useHistory();

    const routeChange = (id) => {
        if(id === 9999)
            history.push("./upcoming");
        else {
            let path = `./movie/${id}`;
            history.push(path);
        }
      };

    if (!ms.Movies || ms.Movies.length === 0) {
        return (
            <h1>
              <Spinner animation="border" variant="secondary" />
              Loading...
            </h1>
          )
      } else {
        const Movies = toJS(ms.Movies);
        Movies.map((movie) => {

            let thisMovieDate = parseInt(movie.firstFeatureDate.split('-')[0]);
            let thisMovieMonth = parseInt(movie.firstFeatureDate.split('-')[1]);
            let thisMovieYear = parseInt(movie.firstFeatureDate.split('-')[2]);

            if(year > parseInt(thisMovieYear)) 
                displayMovies.push(movie)
            if(parseInt(thisMovieYear) === year)
                if(month > thisMovieMonth)
                    displayMovies.push(movie)
                if(thisMovieMonth === month)
                    if(date > thisMovieDate)
                        displayMovies.push(movie)
        })
        return (
            <CardGroup>
                {displayMovies.map((movie, index) => (
                <Card className="upcomingCardOnClick" key={index} border="dark" style={{ width: "15rem" }} onClick={() => routeChange(movie.id)} >
                    <Card.Body>
                        <Card.Img
                        variant="top"
                        src={movie.posterURL}
                        style={{ width: "180px", height: "260px" }}
                        />
                        <Card.Title>{movie.movieName}</Card.Title>
                        <Card.Text>
                            Første visning d. { movie.firstFeatureDate }
                            <br />
                            { movie.description }
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </CardGroup>
        )
    }
}

export default observer(DisplayMovieCards);