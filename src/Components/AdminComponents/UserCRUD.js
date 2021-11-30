import { useHistory } from "react-router";
import { observer } from 'mobx-react-lite';
import { Table, Button, Container, Form, Spinner } from "react-bootstrap";
import { us } from '../../Assets/Stores/UserStore';
import Loading from '../GlobalPartials/Loading';

const UserAdmin = () => {
  const history = useHistory();

  const routeEditChange = (id) => {
    let path = `./edituser/${id}`;
    history.push(path);
  };

  if (!us.Users || us.Users.length < 1)
    return (
      <Loading />
    )
  else
    return (
      <Container>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bruger Id</th>
            <th>Fornavn</th>
            <th>Efternavn</th>
            <th>Email</th>
            <th>Billede</th>
            <th>Bekræftet?</th>
            <th>Admin?</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            {us.Users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.given_Name}</td>
                <td>{user.family_Name}</td>
                <td>{user.email}</td>
                <td><a href={user.picture}>Klik</a></td>
                <td>
                <Form>
                  { user.email_Verified ? <Form.Check inline type="checkbox" disabled defaultChecked={true} /> : <Form.Check inline type="checkbox" disabled /> }
                </Form>
                </td>
                <td>
                  <Form>
                    { user.admin ? <Form.Check inline type="checkbox" disabled defaultChecked={true} /> : <Form.Check inline type="checkbox" disabled /> }
                  </Form>
                </td>
                <td>
                  <Button
                    className="TableEditBtn"
                    variant="outline-warning"
                    onClick={() => routeEditChange(user.id)}
                  >
                    Rediger
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => us.deleteUser(user.id)}
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

export default observer(UserAdmin);