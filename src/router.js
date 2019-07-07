import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Home from './screens/Home';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
