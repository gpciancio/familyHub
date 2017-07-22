import React, { Component } from 'react';
import Calendar from './components/calendar';
import TodoContainer from './components/todo-container';

class App extends Component {

  render() {
    return (
      <div>
        <div id="calendar">
          <Calendar />
        </div>

        <div id="weather">

        </div>

        <div id="whiteboard">

        </div>

        <div id="todo">
          <TodoContainer/>
        </div>
      </div>
    );
  }
}

export default App;
