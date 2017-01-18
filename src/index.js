import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './common/routes';

import './styles/index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router
    routes={routes}
    history={browserHistory}
  />,
  rootElement
);
