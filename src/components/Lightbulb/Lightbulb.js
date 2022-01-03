import React, { Component } from 'react';
import './Lightbulb.css';

import bulbOn from '../../lightbulb-on.gif';
import bulbOff from '../../lightbulb-off.gif';

import bulbOnSwitch from '../../on-button.png'; 
import bulbOffSwitch from '../../off-button.png';


const LightOn = (props) => {
  return (
    <div className="lightbulb">
      <img src={bulbOn} />
      <button onClick={props.onClick}>
        On
      </button>
    </div>
  );
};

const LightOff = (props) => {
  return (
    <div className="lightbulb">
      <img src={bulbOff} />
      <button onClick={props.onClick}>
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
