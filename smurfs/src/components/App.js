/** @jsx jsx */
import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { jsx, css, Global } from '@emotion/core';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
              //color: pink;
            }
            label {
              display: block;
            }
          `}
        />
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
