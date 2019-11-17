import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Clock from './components/clock'

class App extends React.Component {
  constructor(){
    super();
    this.state = {format: "time"};
    this.formatCycle = ["time", "date", "all"];
    this.cycleCursor = 1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock format={this.state.format}/>
        </header>
      </div>
    );
  }
}

export default App;
