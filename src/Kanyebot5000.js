import React, { Component } from 'react';

class Kanyebot5000 extends Component {
  handleChange(e){
      this.props.updateGreeting(e.target.value)
    }

  render() {
    return (
      <div>
        <h3>Kanyebot5000</h3>
        <p> Im gonna let you finish but Beyonce is <strong>{this.props.greeting}</strong> </p>
      </div>
    );
  }
}

export default Kanyebot5000;
