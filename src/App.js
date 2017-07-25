import React, { Component } from 'react';
import Splash from './components/splash';
import Calendar from './components/calendar';
import Weather from './components/weather';
import Whiteboard from './components/whiteboard';
import TodoContainer from './components/todo-container';

class App extends Component {

  render() {
    return (
      <div>
        <div id="splash" className="splash">
          <Splash />
        </div>

        <div id="calendar" className="calendar">
          <Calendar />
        </div>

        <div id="weather" className="weather">
          <Weather />
        </div>

        <div id="whiteboard" className="whiteboard">
          <Whiteboard />
        </div>

        <div id="todo" className="todo">
          <TodoContainer/>
        </div>
      </div>
    );
  }
}

export default App;
