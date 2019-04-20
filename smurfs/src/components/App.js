import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>SMURFS VILLAGE</h1>
        </header>

        <div className="nav-wrapper">
          <NavLink exact to="/">Village</NavLink>
          <NavLink exact to="/smurf-form">Add Smurf</NavLink>
        </div>

        <Route exact path='/' render={(props) => (
          <Smurfs {...props} />
        )}/>

        <Route path='/smurf-form' render={(props) => (
          <SmurfForm {...props} />
        )}/>

      </div>
    );
  }
}

export default App;
