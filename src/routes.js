import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import Environment from './components/Environment';

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/environment" component={Environment} />
    </Route>
  );
}
