import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Auth0Provider
    domain="process.env.REACT_APP_AUTH0_DOMAIN"
    clientID="process.env.REACT_APP_AUTH0_CLIENT_ID"
    redirectUri="process.env.REACT_APP_AUTH0_CALLBACK_URL"
    responseType="token id_token"
    scope="openid profile email"
  >
    <Router>
      <Route component={App}></Route>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
