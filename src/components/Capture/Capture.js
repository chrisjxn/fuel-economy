import React from 'react';
import './Capture.css';


export default function Capture(props) {
    return (
        <div className="capture_wrapper">
            <input
                className="input_box"
                placeholder="Date (mm/dd/yyyy)"
                onChange={props.handleDateChange}
                value={props.date} />
            <input
                className="input_box"
                placeholder="Odometer"
                onChange={props.handleOdometerChange}
                value={props.odometer} />
            <input
                className="input_box"
                placeholder="Price per gallon"
                onChange={props.handleFuelPriceChange}
                value={props.fuelPrice} />
            <input
                className="input_box"
                placeholder="Gallons"
                onChange={props.handleGallonsChange}
                value={props.gallons} />
            <textarea
                className="notes_box"
                placeholder="Notes"
                onChange={props.handleNotesChange}
                value={props.notes} />
            <button className="enter_button"
                onClick={props.handleSubmitValues}>
                <i className="fa fa-arrow-circle-down fa-4x"></i>
            </button>
        </div>
    )
}
