import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer';
import Todo from './Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Seja bemvinda(o) {this.props.nome}</h2>
        </div>
        <p className="App-intro">
          Este é o código de nosso Meetup2.
        </p>
        <Timer />
        <Todo />
      </div>
    );
  }
}

export default App;
