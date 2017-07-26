import React from 'react';
import io from 'socket.io-client';
let socket = io()

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    };
  }
componentDidMount(){
  socket.on(`server:event`,data=>{this.setState({data})})

}

sendChat = ()=>{

  let message = this.state.message
  socket.emit('chat',message)
debugger;

console.log(message);


}

  render() {
    return (
      <div>
      <ul id="messages"></ul>
      <form >
        <input onChange={(event)=> this.setState({message:event.target.value})}id="m" /><button onClick={ ()=> this.sendChat() } type="button">Send</button>
      </form>
      </div>
    )
  }

}

export default Chat;
