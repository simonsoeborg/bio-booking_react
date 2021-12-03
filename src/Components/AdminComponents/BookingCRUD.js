// List all movies in a table, Have Delete and Edit buttons from each movie, on table row click navigate to movie details
import { observer } from "mobx-react-lite";
import { Table, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { nbs } from "../../Assets/Stores/NewBookingStore";
import Loading from '../GlobalPartials/Loading';

const BookingAdmin = () => {
  const history = useHistory();
  const changeRoute = (id) => {
    history.push(`/movie/${id}`)
  }
  if (!nbs.NewBookings || nbs.NewBookings.length < 1)
  return (
    <Loading />
  )
  else
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Film Id</th>
              <th>Booking Dato</th>
              <th>Sæde</th>
              <th>Række</th>
              <th>Booking Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {nbs.NewBookings.map((booking, index) => (
              <tr key={index}>
                <td><Button variant="outline-primary" onClick={() => changeRoute(booking.movieId)}>{booking.movieId}</Button></td>
                <td>{booking.bookingDate}</td>
                <td>{booking.seat}</td>
                <td>{booking.trow}</td>
                <td>{booking.sessionId}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => nbs.deleteBooking(booking.id)}
                  >
                    Slet
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
};

export default observer(BookingAdmin);
