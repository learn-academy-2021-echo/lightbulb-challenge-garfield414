import React, { Component } from 'react';
import Lightbulb from '../Lightbulb/Lightbulb';

class AddRemove extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        lightBulbs: []
      };
   }

  addBulbs = () => {
    this.setState({ lightBulbs: [...this.state.lightBulbs, <Lightbulb />] });
  };

  removeBulbs = () => {
    var bulbs = [...this.state.lightBulbs];
    bulbs.pop();
    this.setState({ lightBulbs: bulbs });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.addBulbs}>add</button>
          <button onClick={this.removeBulbs}>delete</button>
          <div>{this.state.lightBulbs}</div>
        </div>
      </>
    );
  }
}

export default AddRemove;
