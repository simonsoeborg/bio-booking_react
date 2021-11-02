import React from 'react'
import './App.css';
import Init from './Components/grid'
import InfoSite from './Components/infosite';
import Program from './Components/program';
import MoviePage from './Components/moviepage';
import LoginPage from './Components/loginpage';

import {
    HashRouter,
    Route,
    Switch} from "react-router-dom";
import BioNavbar from "./Components/navbar";

const App = () => {
  return (
    <div className="App">
        <HashRouter>
            <BioNavbar />
        <Switch>
            <Route path="/infobook/" component={InfoSite}/>
            <Route path="/upcoming" />
            <Route path="/program" component={Program} />
            <Route path="/movie" component={MoviePage} />
            <Route exact path="/" component={Init}/>
            <Route path="/login" component={LoginPage} />
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
