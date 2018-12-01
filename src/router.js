import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';

let Router = () => 
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
  </HashRouter>

export default Router;