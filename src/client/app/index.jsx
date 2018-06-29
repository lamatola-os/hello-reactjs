import React from 'react';
import {render} from 'react-dom';

class Introgen extends React.Component {
  render () {
    return <p> Welcome to Introgen v1 (brother of N2)!</p>;
  }
}

render(<Introgen/>, document.getElementById('introgen'));
