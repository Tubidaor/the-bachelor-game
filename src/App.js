import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h2>The Bachelor(ett) game </h2>
        <Home/>
      </div>
    );
  }
}


