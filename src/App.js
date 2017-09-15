import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EventContainer from './components/EventContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Eventbrite Viewer</h2>
        </div>
        <EventContainer />
      </div>

    );
  }
}

export default App;
