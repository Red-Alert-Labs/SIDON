import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

import './styles/style.css';
import './styles/main.css';
import './styles/sb-admin-2.css';
import './vendor/fontawesome-free/css/all.min.css'
import "./styles/uploader.css";
//import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
