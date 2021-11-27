import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Container, Table } from "react-bootstrap";
import { us } from '../Assets/Stores/UserStore';
import { toJS } from 'mobx';

class LoginPage extends Component {
  data = null
  render() {
    const { loginWithPopup, logout, user, isAuthenticated } = this.props.auth0;

    if (isAuthenticated)
      toJS(us.Users).map((getUser) => {
        console.log(getUser)
        if(user.email !== getUser.email) {
          // User doesnt exists "create new User"
          this.data = {
            "given_Name": user.given_name,
            "family_Name": user.family_name,
            "email": user.email,
            "email_Verified": user.email_verified,
            "picture": user.picture,
            "admin": "false",
          };
        }
      })

    if (this.data !== null)
      us.postUser(JSON.stringify(this.data));


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
}

// const LoginPage = () => {

//   const findUser = userStore.find((item) => item.email === user.email);

//   return (
//     <div className="login">
//       <div className="login-header">
//         <h2>Login</h2>
//       </div>

//       <div className="login-body">
//         {isAuthenticated && (
//           <Container>
//             <Table bordered size="md">
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Email</th>
//                   <th>Email Validated?</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     {" "}
//                     <img src={user.picture} alt="N/A" />{" "}
//                   </td>
//                   <td> {user.given_name} </td>
//                   <td> {user.family_name} </td>
//                   <td> {user.email} </td>
//                   <td>
//                     {" "}
//                     {user.email_verified
//                       ? "Verified"
//                       : "Not Verified Yet, Check your mail inbox"}{" "}
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </Container>
//         )}

//         {isAuthenticated ? (
//           <Button onClick={logout} variant="outline-danger">
//             Logout
//           </Button>
//         ) : (
//           <div>
//             <Button onClick={loginWithPopup} variant="outline-success">
//               Login
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default withAuth0(LoginPage);
