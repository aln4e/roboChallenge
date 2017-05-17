import React, { Component } from 'react';

class BadRobot extends Component {
  handleChange(e){
      this.props.updateGreeting(e.target.value)
    }

  findStringLength(){
    var text = this.props.greeting.length;
    var str = '';
    for(var i=1; i<=text; i++){
      if(i % 3 === 1){
        str +='B';
      }
      else if(i % 3 === 2){
        str +='L';
      }
      else if(i % 3 ===0){
        str += "A";
      }
    }
    return str
  }

  render() {
    return (
      <div>
        <h3>Bad Robot</h3>
        <p> I hear you saying <strong>{this.findStringLength()}</strong> Is that correct? </p>
      </div>
    );
  }
}

export default BadRobot;
