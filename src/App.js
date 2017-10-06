import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Input />
      </div>
    );
  }
}

export default App;
