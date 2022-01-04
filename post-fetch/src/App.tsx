import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './components/HomePage'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post-details" exact component={PostDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
