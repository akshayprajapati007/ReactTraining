import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/quiz" exact component={QuizPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
