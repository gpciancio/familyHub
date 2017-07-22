import React, { Component } from 'react';
import Calendar from './components/calendar';
import Whiteboard from './components/whiteboard';
import TodoContainer from './components/todo-container';

class App extends Component {

  render() {
    return (
      <div>
        <div id="calendar" className="calendar">
          <Calendar />
        </div>

        <div id="weather" className="weather">

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
