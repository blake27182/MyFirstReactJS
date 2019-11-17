import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

class Clock extends React.Component {
  constructor(props){
    super();
    this.format = props.format;
    this.state = {time: new Date().toLocaleTimeString()};
  }

  componentDidMount(){
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  tick(){
    if (this.format === "time"){
      this.setState({time: new Date().toLocaleTimeString()});
    } else if (this.format === "date") {
      this.setState({time: new Date().toDateString()});
    }
  }

  render(){
    if (this.format === "time"){
      return (
        <p>{new Date().toLocaleTimeString()}</p>
      );
    } else if (this.format === "date") {
      return (
        <p>{new Date().toDateString()}</p>
      );
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {format: "time"};
    this.formatCycle = ["time", "date", "all"];
    this.cycleCursor = 1;
  }

  changeFormat(){
    let index = this.cycleCursor%this.formatCycle.length;
    let formatType = this.formatCycle[index];
    let newState = {format: formatType};
    this.setState(newState);
    this.cycleCursor += 1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock format={this.state.format}/>
          <Button variant="primary" size="lg" onClick={() => this.changeFormat()}>
            {this.state.format}
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
