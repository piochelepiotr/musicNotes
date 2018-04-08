import React, { Component } from 'react';
import './App.css';
import Partition from './Partition'
import Input from './Input';
import Speed from './Speed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Partition length={20} />
        <Input />
        <Speed />
      </div>
    );
  }
}

export default App;
