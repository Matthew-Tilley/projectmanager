import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header>THIS IS A HEADER</header>
        <p>THIS IS MY AWESOME REACT APP</p>
        <div class = "aligner">
        <div class = "tester"  id = "b1"></div>
        <div class = "tester"  id = "b2"></div>
        </div>
      </div>
    );
  }
}

export default App;
