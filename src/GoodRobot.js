import React, { Component } from 'react';

class GoodRobot extends Component {
  handleChange(e){
      this.props.updateGreeting(e.target.value)
    }

  render() {
    return (
      <div>
        <h3>Good Robot</h3>
        <p> I hear you saying <strong>{this.props.greeting}</strong> Is that correct? </p>
      </div>
    );
  }
}

export default GoodRobot;
