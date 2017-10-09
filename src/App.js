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
      date: '',
      odometer: '',
      fuelPrice: '',
      gallons: '',
      notes: '',
      refuels: [],
      currentObject: {},
      baseUrl: 'http://localhost:3000'
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOdometerChange = this.handleOdometerChange.bind(this);
    this.handleFuelPriceChange = this.handleFuelPriceChange.bind(this);
    this.handleGallonsChange = this.handleGallonsChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmitValues = this.handleSubmitValues.bind(this);
    this.handleViewRefuel = this.handleViewRefuel.bind(this);
    this.update = this.update.bind(this);
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
        this.setState({ refuels: response.data })
      })
  }

  handleViewRefuel(index) {
    this.setState({ currentObject: this.state.refuels[index] });
  }

  update() {
    axios.get(this.state.baseUrl + '/api/refuel')
      .then(response => {
        this.setState({ refuels: response.data })
      })
  }

  render() {
    let refuelsList = this.state.refuels.map((item, i) => {
      return (
        <List
          date={item.date}
          odometer={item.odometer}
          notes={item.notes}
          index={i}
          handleViewRefuel={this.handleViewRefuel}
        />
      )
    })

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
        <div className="list_wrapper">
          <table>
            <tbody>
              <tr>
                <th className="left_column">Date</th>
                <th className="center_column">Odometer</th>
                <th className="right_column">Notes</th>
                <th className="edit_button">Edit</th>
              </tr>
              {refuelsList}
            </tbody>
          </table>
        </div>
        <ViewRefuel
          id={this.state.currentObject.id}
          date={this.state.currentObject.date}
          odometer={this.state.currentObject.odometer}
          fuelPrice={this.state.currentObject.fuelPrice}
          gallons={this.state.currentObject.gallons}
          notes={this.state.currentObject.notes}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
