import { observer } from "mobx-react-lite"
import { toJS } from 'mobx';
import { useHistory } from "react-router";
import { CardGroup, Container, Row, Card, Button } from "react-bootstrap";
import { ms } from '../Assets/Stores/MovieStore';
// this is program
const Program = () => {
    const history = useHistory();
    const displayMovies = []
    // New date to compare
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const routeChange = (id) => {
        if(id === 9999)
            history.push("./upcoming");
        else {
            let path = `./movie/${id}`;
            history.push(path);
        }
      };

    if (!ms.Movies || ms.Movies.length === 0) {
        return <h1>Loading...</h1>;
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
        <Container>
            <Row> 
                <h1>Disse film bliver vist i Bio 404 lige nu</h1>
            </Row>
            <Row style={{ padding: "2rem" }} className="justify-content-md-center">
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
            </Row>
            <Row className="justify-content-md-center">
                <Container style={{ width: '15rem'}}>
                    <Button variant="outline-success" onClick={() => routeChange(9999)}>Vis kommende film</Button>
                </Container>
            </Row>
        </Container>
        )
    }
}

export default observer(Program);