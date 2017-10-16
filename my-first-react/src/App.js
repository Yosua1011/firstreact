import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Description from './components/Description';
import Severity from './components/Severity';
import Assignment from './components/Assignment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 class="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <h2 class="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <Description />
            <Severity />
            <Assignment />
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
