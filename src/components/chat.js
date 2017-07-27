import React from 'react';
import io from 'socket.io-client';
let socket = io.connect();


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

  sendChat = (event)=>{
    event.preventDefault();
    let message = this.state.message;
    socket.emit('chat',message);
    let box = document.getElementById('messages');
    box.scrollTop = box.scrollHeight - box.clientHeight;
  }

  handleChatTextChange = (event) => {
    this.setState({ message: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12" id="messages">
            <h3>Family Chat</h3>
          {this.state.data.map((msg,index) =>
            <div key={index}>{msg}</div>
          )}
          </div>
        </div>
        <div className="row">

        <form>
          {/* <input className="form-control chatText" placeholder="Say something.."
            onChange={this.handleChatTextChange} value={this.state.message}
            id="m"
          />
          <button
            onClick={this.sendChat}
            type="submit"
          >
            Send
          </button> */}
          <div className="col-sm-12">
            <div className="input-group">
              <input type="text" className="form-control" onChange={this.handleChatTextChange} value={this.state.message} placeholder="Search for..."/>
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={this.sendChat} type="submit">Send</button>
              </span>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Chat;
