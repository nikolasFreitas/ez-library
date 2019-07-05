import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>OIEEE</h1>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
