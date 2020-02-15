import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Income from './components/income.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Income}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
