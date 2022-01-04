import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import CountryDetails from './components/CountryDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div className="App">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/country-details" exact component={CountryDetails} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
