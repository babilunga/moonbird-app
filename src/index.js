import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Game from './Game';

import './styles/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game981012" component={Game} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
