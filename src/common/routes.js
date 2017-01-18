import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Error } from './components';
import Home from '../home';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={Error} />
  </Route>
);

export default routes;
