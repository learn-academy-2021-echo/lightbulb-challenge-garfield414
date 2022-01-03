import React, { Component } from 'react';
import './Lightbulb.css';

const LightOn = (props) => {
  return (
    <div className="lightbulb">
    <button onClick={props.onClick} style={{backgroundColor:'yellow'}}>
      On
    </button>
    </div>
  );
};

const LightOff = (props) => {
  return (
    <div className="lightbulb">
    <button onClick={props.onClick} style={{backgroundColor:'white'}}>
      Off
    </button>
    </div>
  );
};

class Lightbulb extends React.Component {
  constructor(props) {
    super(props);
    this.handleOn  = this.handleOn.bind(this);
    this.handleOff = this.handleOff.bind(this);
    this.state     = { toggled: false };
  }

  handleOn() {
    this.setState({ toggled: true });
  }

  handleOff() {
    this.setState({ toggled: false });
  }

  render() {
    const toggled = this.state.toggled;

    if (toggled) {
      return <LightOff onClick={this.handleOff} /> 
    } else {
      return <LightOn onClick={this.handleOn} />
    }
  }
}

export default Lightbulb;
