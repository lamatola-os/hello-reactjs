import React from 'react';
import {render} from 'react-dom';

class ChatComponent1 extends React.Component {
  render () {
    return <p>chat</p>;
  }
}

class ChatComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        message: '',
        message1: '',
        reply: ''
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessage1Change = this.handleMessage1Change.bind(this);
    this.handleReplyChange = this.handleReplyChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleMessageChange(event) {
    this.setState({
        message: event.target.value
    });
  }

  handleMessage1Change(event) {
    this.setState({
        message1: event.target.value
    });
  }

  handleReplyChange(event) {
    this.setState({
        reply: 'test'
    });
  }

  sendMessage(event) {
    console.log(this.state.message1 + ': ' + this.state.message1);
    this.setState({
        message: this.state.message1,
        reply: 'hi, how can I help you?',
    });
    fetch("localhost:3000/chat/init")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              reply: result.message
            });
          },
          (error) => {
            this.setState({
              reply: 'something went wrong'
            });
          }
        )
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.sendMessage}>

        <label>
          prayagupd:
        </label>
        <span>{this.state.message}</span>
        <br/>
        <label>
          Agent:
        </label>
        <span>{this.state.reply}</span>

        <br/>
        <div>
          <input type="text" value={this.state.message1} onChange={this.handleMessage1Change}/>
          <input type="submit" value="Send" />
        </div>

      </form>
    );
  }
}

render(<ChatComponent/>, document.getElementById('chat'));
