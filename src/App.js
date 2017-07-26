import React, { Component } from 'react';
import Calendar from './components/calendar';
import Weather from './components/weather';
import Whiteboard from './components/whiteboard';
import TodoContainer from './components/todo-container';
import Chat from './components/chat';

class App extends Component {

  render() {
    console.log("rendering components");
    return (
      <div>
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
        <div id="chat" className="chat">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
