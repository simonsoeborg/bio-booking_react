import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
        domain="simonsoeborg.eu.auth0.com"
        clientId="p0x9d5bdhBqekrNj206nH7Db5359q6Cz"
        redirectUri={window.location.origin}

      >
        <App />
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);