import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Welcome to introgen (brother of N2)!</p>;
  }
}

render(<App/>, document.getElementById('app'));
