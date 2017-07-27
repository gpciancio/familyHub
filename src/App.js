import React, { Component } from 'react';
import Splash from './components/splash';
import Calendar from './components/calendar';
import Weather from './components/weather';
import Whiteboard from './components/whiteboard';
import TodoContainer from './components/todo-container';
import Chat from './components/chat';
import Chicken from './components/chicken';
// import Game from './components/game';

class App extends Component {
  state = {
    email: "familyhub123@gmail.com",
    showSplash: true,
    showLearnMore: false,
    showChicken: false
  }


  componentDidMount = () => {
    this.loadState();
  }

  updateEmailText = (newEmail) => {
    this.setState({email: newEmail});
  }

  saveEmail = () => {
    this.setState({emailInput: true});
    this.saveState();
    this.goToApp();
  }

  goToLearnMore = () => {
    this.setState({showSplash: true, showLearnMore: true});
  }

  goToHome = () => {
    this.setState({showSplash: true, showLearnMore: false});
  }

  goToApp = () => {
    this.setState({showSplash: false, showLearnMore: false});
  }

  saveState = () => {
    localStorage.setItem('famhub-email', this.state.email);
  }

  loadState = () => {
   const email = localStorage.getItem('famhub-email');
   if (email !== null) {

     this.setState({
       email: email
     });
   }

   return;
 }

 showChicken = () => {
   this.setState({showChicken: true});
   setTimeout(() => this.setState({showChicken: false}), 300)
 }

  render() {
    return (
      <div>
        <div id="splash" className="splash">
          <Splash
            defaultEmail={this.state.email}
            showSplash={this.state.showSplash}
            showLearnMore={this.state.showLearnMore}
            updateEmailText={this.updateEmailText}
            saveEmail={this.saveEmail}
            goToHome={this.goToHome}
            goToLearnMore={this.goToLearnMore}
            goToApp={this.goToApp}
          />
        </div>

        <div id="calendar" className="calendar">
          <Calendar
            email={this.state.email}
            goToHome={this.goToHome}
          />
        </div>
        <div id="weather" className="weather">
          <Weather />
        </div>

        <div id="whiteboard" className="whiteboard">
          <Whiteboard />
        </div>

        <div id="todo" className="todo">
          <TodoContainer
            showChicken={this.showChicken}
          />
        </div>
        <div id="chat" className="chat">
          <Chat />
        </div>
        <div id="chicken">
          <Chicken
            show={this.state.showChicken}
          />
        </div>
      </div>
    );
  }
}

// <div>
//   <Game/>
// </div>




export default App;
