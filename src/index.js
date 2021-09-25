import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route } from 'react-router-dom';
import InfoSite from './Components/infosite';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Route path="/infobook" component={InfoSite}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
