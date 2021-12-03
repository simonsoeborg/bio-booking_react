import { useHistory } from "react-router";
import { observer } from 'mobx-react-lite';
import { Table, Button, Container } from "react-bootstrap";
import { ts } from '../../Assets/Stores/TheaterStore';
import Loading from '../GlobalPartials/Loading';

const TheaterAdmin = () => {
  const history = useHistory();

  const routeEditChange = (id) => {
    let path = `./edittheater/${id}`;
    history.push(path);
  };

  const routeCreateChange = () => {
    let path = `./createtheater/`;
    history.push(path);
  }

  if (!ts.Theaters || ts.Theaters.length < 1)
    return (
      <Loading />
    )
  else
    return (
      <Container>
      <Button className="MovieAddToDB" variant="outline-success" onClick={() => routeCreateChange()}>
        Tilføj Sal
      </Button>
      <Table striped bordered hover>          
        <thead>
          <tr>
            <th>Sal Id</th>
            <th>Navn</th>
            <th>Antal Rækker</th>
            <th>Antal Sæder</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ts.Theaters.map((theater, index) => (
            <tr key={index}>
              <td>{theater.id}</td>
              <td>{theater.theaterName}</td>
              <td>{theater.theaterRows}</td>
              <td>{theater.theaterSeats}</td>
              <td>
                <Button
                  className="TableEditBtn"
                  variant="outline-warning"
                  onClick={() => routeEditChange(theater.id)}
                >
                  Rediger
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => ts.deleteTheater(theater.id)}
                >
                  Slet
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    )
}



export default observer(TheaterAdmin);
