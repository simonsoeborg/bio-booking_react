import { observer } from "mobx-react-lite"
import { useHistory } from "react-router";
import { Container, Row, Button } from "react-bootstrap";
import { ms } from '../Assets/Stores/MovieStore';
import DisplayMovieCards from "./ProgramComponents/DisplayMovieCards";
import Loading from '../Components/GlobalPartials/Loading';

const Program = () => {
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
            <Loading />
          )
      } else {
        return (
        <Container>
            <Row> 
                <h1>Disse film bliver vist i Bio 404 lige nu</h1>
            </Row>
            <Row style={{ padding: "2rem" }} className="justify-content-md-center">
                <DisplayMovieCards />
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
