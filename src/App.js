import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import GreetingInput from './GreetingInput'
import GoodRobot from './GoodRobot'
import BadRobot from './BadRobot'
import Kanyebot5000 from './Kanyebot5000'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: ''
    }
  }

  updateGreeting(greeting){
  this.setState({greeting: greeting})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Robo Active Listening</h1>
        </div>
        <Header />
        <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        <GoodRobot greeting={this.state.greeting} />
        <BadRobot greeting={this.state.greeting} />
        <Kanyebot5000 greeting={this.state.greeting} />
      </div>
    );
  }
}

export default App;
