import React, {Component} from 'react';
import './App.css';
import Rect from "./Rect";

class App extends Component {
  render() {
    return <div>
      <h1>React</h1>
      <Rect x="100" y="100" w="100" h="100" c="cyan" r="50"/>
      <Rect x="150" y="150" w="150" h="150" c="magenta" r="75"/>
      <Rect x="200" y="200" w="200" h="200" c="black" r="25"/>
    </div>
  }
}

export default App;
