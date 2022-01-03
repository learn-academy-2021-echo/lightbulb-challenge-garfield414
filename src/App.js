import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Lightbulb from './components/Lightbulb/Lightbulb';
import AddRemove from './components/AddRemove/AddRemove';

class App extends Component {
  render() {
    return(
      <>
      <div className="App">
        <Header />
        <AddRemove />
      </div>
      </>
    );
  }
}
export default App;
