import React, {Component} from 'react';
import './App.css';

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    }
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list.</h2>
      <List title="サンプル・リスト" data={this.data}></List>
    </div>
  }
}

class List extends Component {
  number = 1;

  title = {
    fontSize: "20pt",
    fontWeight: "bold",
    color: "blue"
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) => 
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  li = {
    listStyleType: "square",
    fontSize: "16pt",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }
  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
         {this.props.value}
      </li>
    )
  }
}

export default App;
