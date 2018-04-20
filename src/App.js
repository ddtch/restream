import React, { Component } from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import {RoomsPage} from "./pages/RoomsPage";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to dashboard</h1>
        </header>

        {/*
          Router here is redundant, i started with it bcs I was thought
          we need change url query params and etc
        */}
        <Switch>
          <Route path="/rooms" component={RoomsPage}/>
          <Redirect to="/rooms"/>
        </Switch>

      </div>
    );
  }
}

export default App;
