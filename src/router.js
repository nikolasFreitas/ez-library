import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch></Switch>
  </Router>
);

export default AppRouter;
