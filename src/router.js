import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Home from './screens/Home';
import BookList from './screens/BookList';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/procurar-livros' exact component={BookList} />
    </Switch>
  </Router>
);

export default AppRouter;
