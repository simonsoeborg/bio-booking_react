import { Component } from "react";
import { Row, Card, CardGroup } from "react-bootstrap";
import MovieStore from '../Assets/Stores/MovieStore';

class MovieCards extends Component {
  state = {movies: []}
  async componentDidMount() {
    // MovieStore.getMoviesAsync(this.state.movies);
    // this.setState({ movies: await MovieStore.getMoviesAsync(this.movies)})
    this.setState({ movies: await MovieStore.getMoviesAsync()});
  }

  render() {
    if(this.state.movies.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <Row style={{ padding: "2rem" }}>
            <h2>Spilles i dag</h2>
          </Row>
          <Row style={{ padding: "2rem" }} className="justify-content-md-center">
            <CardGroup>
              {this.state.movies.map((movie, index) => (
                <a
                  key={movie.id}
                  style={{ cursor: "pointer" }}
                  href={`#/movie/${movie.id}`}
                >
                  <Card
                    key={index}
                    border="dark"
                    style={{ width: "15rem" }}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={movie.posterURL}
                        style={{ width: "180px", height: "260px" }}
                      />
                      <Card.Title>{movie.movieName}</Card.Title>
                      <Card.Link href="#/infobook/">18:00</Card.Link>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </CardGroup>
          </Row>
        </div>
      );
    }
  }
}

export default MovieCards;


// const MovieCards = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     // console.log(movies);
//     console.log(movieStore.getMoviesAsync)

//   });


// };

// class MovieCards extends Component {
//   render() {
//     movieStore.movies.map((movie) => console.log(movie));
//     let movies = movieStore.movies;
//     if (movies.length < 1) {
//       return <h1>Loading...</h1>;
//     }
//     return (
//       <div>
//         <Row style={{ padding: "2rem" }}>
//           <h2>Spilles i dag</h2>
//         </Row>
//         <Row style={{ padding: "2rem" }} className="justify-content-md-center">
//           <CardGroup>
//             {Object.keys(movies).map((index) => (
//               <a
//                 key={movies[index].id}
//                 style={{ cursor: "pointer" }}
//                 href={"#/movie/" + movies[index].id}
//               >
//                 <Card
//                   key={movies[index].id}
//                   border="dark"
//                   style={{ width: "15rem" }}
//                 >
//                   <Card.Body>
//                     <Card.Img
//                       variant="top"
//                       src={movies[index].posterURL}
//                       style={{ width: "180px", height: "260px" }}
//                     />
//                     <Card.Title>{movies[index].movieName}</Card.Title>
//                     <Card.Link href="#/infobook/">18:00</Card.Link>
//                   </Card.Body>
//                 </Card>
//               </a>
//             ))}
//           </CardGroup>
//         </Row>
//       </div>
//     );
//   }
// }

// const movieCards = new MovieCards({});

