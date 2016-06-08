import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import getRoutes from './routes';

ReactDOM.render(
    <Router history={ hashHistory } routes={getRoutes()}/>,
    document.getElementById('content')
);
