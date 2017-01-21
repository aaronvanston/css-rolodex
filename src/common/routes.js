import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Error,
  Section,
  SectionIndex,
  Article,
} from './components';
import Home from '../home';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":section" component={Section}>
      <IndexRoute component={SectionIndex} />
      <Route path=":article" component={Article} />
    </Route>
    <Route path="*" component={Error} />
  </Route>
);

export default routes;
