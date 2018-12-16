import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const fruits = [["Apple", "peepee"], "Banana"]
    const state = {stuff: "val", crap: "ton"}

    const {stuff, crap} = state

    return (
      <div className="App">
        <header className="App-header">
          <object type="image/svg+xml" data={logo} className="App-logo" alt="logo"></object>
          <p>
          {
            // -- did stuff
          }
            {fruits.map( (value, key) =>
              typeof value == "object" ?
                value.map( (value, key) =>
                  <b>{`${value} - ${key}`}</b>

                )
              :
                <b>{`${value} - ${key}`}</b>
            )}
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
