import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { us } from "../Assets/Stores/UserStore";

const LoginPage = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  // If logged in by Auth0
  if (isAuthenticated) {
    // Wait for the UserStore to get Users
    if (!us.Users || us.Users.length < 1) {
      console.log("waiting");
    } else {
      us.verifyTokenUser(user);
    }
  }

  return (
    <div className="login">
      <div className="login-header">
        <h2>Login</h2>
      </div>

      <div className="login-body">
        {isAuthenticated && (
          <Container>
            <Table bordered size="md">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Email Validated?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <img src={user.picture} alt="N/A" />{" "}
                  </td>
                  <td> {user.given_name} </td>
                  <td> {user.family_name} </td>
                  <td> {user.email} </td>
                  <td>
                    {" "}
                    {user.email_verified
                      ? "Verified"
                      : "Not Verified Yet, Check your mail inbox"}{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        )}

        {isAuthenticated ? (
          <Button onClick={logout} variant="outline-danger">
            Logout
          </Button>
        ) : (
          <div>
            <Button onClick={loginWithPopup} variant="outline-success">
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
