import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { Container, Table } from "react-bootstrap";
import { us } from '../Assets/Stores/UserStore';
import { toJS } from 'mobx';
import { useState } from "react";


const LoginPage = () => {
  const [data,setData] = useState(null)
  const [exists, setExists] = useState(false);
  const [userExists, setUserExists] = useState(null)
  const [ hasLoaded, setHasLoaded ] = useState(false);

  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  // If logged in by Auth0
  if (isAuthenticated) {
    // Wait for the UserStore to get Users
    if(!us.Users || us.Users.length < 1) {
      console.log("waiting")
    } else {
      
      const isEqual = (arg1, arg2) => {
        console.log(`arg1: ${{arg1}} | arg2: ${{arg2}}`)
        if(arg1.email === arg2.email) {
          if(!hasLoaded){
            setHasLoaded(true);
            if(arg2 === null)
              setUserExists(toJS(arg2));
          }
          return true
        } else {
          return false
        }
      }

      // Map through all users to check if new User is among the users
      if(!exists) {
        toJS(us.Users).find(dbUser => setExists(isEqual(dbUser, user)))
      }

      if(!exists) {
        console.log(userExists)
        if(userExists !== null) {
          setData({
            "given_Name": toJS(userExists).given_name,
            "family_Name": toJS(userExists).family_name,
            "email": toJS(userExists).email,
            "email_Verified": toJS(userExists).email_verified,
            "picture": toJS(userExists).picture,
            "admin": "false",
          });
        }
    
        setExists(true);
        if(data !== null)
          us.postUser(JSON.stringify(data));
      }
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
}

export default LoginPage
