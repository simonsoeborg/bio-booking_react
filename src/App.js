import React from "react";
import "./App.css";
import Init from "./Components/Home";
import Booking from "./Components/Booking";
import Program from "./Components/Program";
import Movie from "./Components/Movie";
import LoginPage from "./Components/LoginPage";
import AdminPage from "./Components/Admin";
import EditMovie from "./Components/AdminComponents/PartialComponents/EditMovie";
import CreateMovie from "./Components/AdminComponents/PartialComponents/CreateMovie";
import EditUser from "./Components/AdminComponents/PartialComponents/EditUser";
import CreateTheater from "./Components/AdminComponents/PartialComponents/CreateTheater";
import EditTheater from "./Components/AdminComponents/PartialComponents/EditTheater";
import Upcoming from './Components/Upcoming';

import { HashRouter, Route, Switch } from "react-router-dom";
import BioNavbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <BioNavbar />
        <Switch>
          <Route path="/booking/:id" component={Booking} />
          <Route path="/booking/" component={Booking} />
          <Route path="/upcoming" component={Upcoming}/>
          <Route path="/program" component={Program} />
          <Route path="/movie/:id" component={Movie} />
          <Route exact path="/" component={Init} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/editmovie/:id" component={EditMovie} />
          <Route path="/edituser/:id" component={EditUser} />
          <Route path="/createmovie/" component={CreateMovie} />
          <Route path="/edittheater/:id" component={EditTheater} />
          <Route path="/createtheater/" component={CreateTheater} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
