import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoSite from './Components/infosite';

import {
    HashRouter,
    Route,
    Switch} from "react-router-dom";


ReactDOM.render(
  <HashRouter>
  <React.StrictMode>
      <App />
      <Switch>
        <Route path="/infobook/" component={InfoSite}/>
        <Route exact path="/"/>
      </Switch>
  </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
