import React, {Component} from 'react';
import './App.css';

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px"
  }
};

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div style={this.context}>
        <Title title="Content page" />
        <Message message="This is Content sample." />
        <Message message="※これはテーマのサンプルです。" />
      </div>
    )
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  
  render() {
    console.log(this.context)
    return <div>
      <h2 style={this.context}>{this.props.title}</h2>
    </div>
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return <div>
      <p style={this.context}>{this.props.message}</p>
    </div>
  }

}

export default App;
