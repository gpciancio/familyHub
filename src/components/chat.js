import React from 'react';
import io from 'socket.io-client';
let socket = io.connect('http://localhost:8000');

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      message: ""
    };
  }

  componentDidMount(){
    socket.on("chat", newMsg => {this.setState((prevState) => ({
      data: prevState.data.concat(newMsg),
      message: ""
      }));
    })
  }

  sendChat = ()=>{
    let message = this.state.message
    socket.emit('chat',message)
    console.log(message);
  }

  render() {
    return (
      <div>
        <ul
          id="messages"
        >
          {this.state.data.map(msg =>
            <li>{msg}</li>
          )}
        </ul>
        <form >
          <input
            onChange={(event) => this.setState({ message: event.target.value})}
            id="m"
          />
          <button
            onClick={ ()=> this.sendChat() }
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default Chat;
