import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Capture from './components/Capture/Capture';
import List from './components/List/List';
import ViewRefuel from './components/ViewRefuel/ViewRefuel';

class App extends Component {
  constructor() {
    super()

    this.state = {
      date: null,
      odometer: null,
      fuelPrice: null,
      gallons: null,
      notes: null,
      refuels: [],
      baseUrl: 'http://localhost:3000'
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOdometerChange = this.handleOdometerChange.bind(this);
    this.handleFuelPriceChange = this.handleFuelPriceChange.bind(this);
    this.handleGallonsChange = this.handleGallonsChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmitValues = this.handleSubmitValues.bind(this);
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value })
  }

  handleOdometerChange(e) {
    this.setState({ odometer: e.target.value })
  }

  handleFuelPriceChange(e) {
    this.setState({ fuelPrice: e.target.value })
  }

  handleGallonsChange(e) {
    this.setState({ gallons: e.target.value })
  }

  handleNotesChange(e) {
    this.setState({ notes: e.target.value })
  }

  handleSubmitValues() {
    let body = {
      date: this.state.date,
      odometer: this.state.odometer,
      fuelPrice: this.state.fuelPrice,
      gallons: this.state.gallons,
      notes: this.state.notes
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
          handleFuelPriceChange={this.handleFuelPriceChange}
          handleGallonsChange={this.handleGallonsChange}
          handleNotesChange={this.handleNotesChange}
          handleSubmitValues={this.handleSubmitValues}
        />
        <List
          handleDateChange={this.handleDateChange}
          handleOdometerChange={this.handleOdometerChange}
          handleFuelPriceChange={this.handleFuelPriceChange}
          handleGallonsChange={this.handleGallonsChange}
          handleNotesChange={this.handleNotesChange}
          handleSubmitValues={this.handleSubmitValues}
        />
        <ViewRefuel
          handleDateChange={this.handleDateChange}
          handleOdometerChange={this.handleOdometerChange}
          handleFuelPriceChange={this.handleFuelPriceChange}
          handleGallonsChange={this.handleGallonsChange}
          handleNotesChange={this.handleNotesChange}
          handleSubmitValues={this.handleSubmitValues}
        />
      </div>
    );
  }
}

export default App;
