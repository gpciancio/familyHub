import React, { Component } from 'react';
import Calendar from './components/calendar';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div>
        <div id="calendar">
          <Calendar />
        </div>

        <div id="weather">
          <Weather />
        </div>

        <div id="whiteboard">

        </div>

        <div id="todo">

        </div>
      </div>
    );
  }
}

export default App;
