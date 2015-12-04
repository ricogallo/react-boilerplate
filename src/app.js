import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router';

import Main from './components/Main';
import PoweredBy from './components/Powered-by';
import About from './components/About';

render((
  <Router>
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      </Route>
    </Router>
  ), document.getElementById('content')
);
