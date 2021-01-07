import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Trainers from './Pages/Trainers/Trainers';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/trainers' component={Trainers}/>
      </Switch>
    </Router>
  )
}

export default App;
