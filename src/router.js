import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Home from './screens/Home';
import BookList from './screens/BookList';
import UserBooks from './screens/UserBooks';

const AppRouter = () => (
  <Router basename='/ez-library'>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/procurar-livros' exact component={BookList} />
      <Route path='/meus-livros' exact component={UserBooks} />
    </Switch>
  </Router>
);

export default AppRouter;
