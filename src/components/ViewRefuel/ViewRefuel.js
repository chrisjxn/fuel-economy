import React, { Component } from 'react';
import './ViewRefuel.css';
import axios from 'axios';


class ViewRefuel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            date: '',
            odometer: '',
            fuelPrice: '',
            gallons: '',
            notes: '',
            baseUrl: 'http://localhost:3000',
        }
        this.handleEditId = this.handleEditId.bind(this);
        this.handleEditDate = this.handleEditDate.bind(this);
        this.handleEditOdometer = this.handleEditOdometer.bind(this);
        this.handleEditFuelPrice = this.handleEditFuelPrice.bind(this);
        this.handleEditGallons = this.handleEditGallons.bind(this);
        this.handleEditNotes = this.handleEditNotes.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleDeleteRefuel = this.handleDeleteRefuel.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ id: newProps.id, date: newProps.date, odometer: newProps.odometer, fuelPrice: newProps.fuelPrice, gallons: newProps.gallons, notes: newProps.notes })
    }

    handleEditId(e) {
        this.setState({ id: e.target.value })
    }

    handleEditDate(e) {
        this.setState({ date: e.target.value })
    }

    handleEditOdometer(e) {
        this.setState({ odometer: e.target.value })
    }

    handleEditFuelPrice(e) {
        this.setState({ fuelPrice: e.target.value })
    }

    handleEditGallons(e) {
        this.setState({ gallons: e.target.value })
    }

    handleEditNotes(e) {
        this.setState({ notes: e.target.value })
    }

    handleSaveChanges() {
        let body = {
            id: this.state.id,
            date: this.state.date,
            odometer: this.state.odometer,
            fuelPrice: this.state.fuelPrice,
            gallons: this.state.gallons,
            notes: this.state.notes
        };

        axios.put(this.state.baseUrl + `/api/refuel/${this.state.id}`, body)
            .then(response => {
                this.setState({ refuels: response.data })
                this.props.update();
            })
    }

    handleDeleteRefuel() {
        axios.delete(this.state.baseUrl + `/api/refuel/${this.state.id}`)
            .then(response => {
                this.setState({ refuels: response.data })
                this.props.update();
            })
    }


    render() {
        return (
            <div className="viewRefuel_wrapper">
                <input
                    value={this.state.id}
                    onChange={this.handleEditId}
                    placeholder="Id"
                    className="input_box"
                />
                <input
                    value={this.state.date}
                    onChange={this.handleEditDate}
                    placeholder="Date"
                    className="input_box"
                />
                <input
                    value={this.state.odometer}
                    onChange={this.handleEditOdometer}
                    placeholder="Odometer"
                    className="input_box"
                />
                <input
                    value={this.state.fuelPrice}
                    onChange={this.handleEditFuelPrice}
                    placeholder="Fuel price"
                    className="input_box"
                />
                <input
                    value={this.state.gallons}
                    onChange={this.handleEditGallons}
                    placeholder="Gallons"
                    className="input_box"
                />
                <textarea
                    value={this.state.notes}
                    onChange={this.handleEditNotes}
                    placeholder="Notes"
                    className="notes_box"
                />
                <div className="button_area">
                    <button
                        onClick={this.handleSaveChanges}
                        className="save_button"
                    >
                        <i className="fa fa-floppy-o fa-2x"></i>
                    </button>
                    <button
                        onClick={this.handleDeleteRefuel}
                        className="delete_button"
                    >
                    <i className="fa fa-trash-o fa-2x"></i>
                </button>
                </div>
            </div>
        )
    }
}

export default ViewRefuel