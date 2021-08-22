import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Mainpage from './pages/Main-page'
import Scoring from './pages/Scoring-page'
import Standings from './pages/Standings-page'
import Admin from './pages/Administrative-page'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h2>The Bachelor(ett) game </h2>
        <Switch>
          <Route
            exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/main"
            component={Mainpage}
          />
          <Route
            exact
            path="/scoring"
            component={Scoring}
          />
          <Route
            exact
            path="/standings"
            component={Standings}
          />
          <Route
            exact
            path="/Admin"
            component={Admin}
          />
        </Switch>
      </div>
    );
  }
}


