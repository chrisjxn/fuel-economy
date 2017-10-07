import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Capture from './components/Capture/Capture';

class App extends Component {
  constructor() {
    super()

    this.state = {
      date: null,
      odometer: null,
      refuels: [],
      baseUrl: 'http://localhost:3000'
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOdometerChange = this.handleOdometerChange.bind(this);
    this.handleSubmitValues = this.handleSubmitValues.bind(this);
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value })
  }

  handleOdometerChange(e) {
    this.setState({ odometer: e.target.value })
  }

  handleSubmitValues() {
    let body = {
      date: this.state.date,
      odometer: this.state.odometer
    };

    axios.post(this.state.baseUrl + '/api/refuel', body)
    .then(response => {
      this.setState({ refuels: response.data.refuel })
    })
    console.log(this.state.refuels);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Capture
          handleDateChange={this.handleDateChange}
          handleOdometerChange={this.handleOdometerChange}
          handleSubmitValues={this.handleSubmitValues}
        />
      </div>
    );
  }
}

export default App;
