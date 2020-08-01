import React from 'react';
import {render} from 'react-dom';

class IntrogenComponent extends React.Component {
  render () {
    return <p> Welcome to Introgen v1 (brother of N2)!</p>;
  }
}

class ThoughtsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', feeling: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFeelingChange = this.handleFeelingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleFeelingChange(event) {
    this.setState({feeling: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.name + ': ' + this.state.feeling);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>

        <label>
          How you feeling?:
          <input type="text" value={this.state.feeling} onChange={this.handleFeelingChange} />
        </label>

        <input type="submit" value="Share" />
      </form>
    );
  }
}

render(<ThoughtsComponent/>, document.getElementById('introgen-container'));
