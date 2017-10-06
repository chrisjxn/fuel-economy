import React from 'react';
import './Capture.css';


export default function Capture(props) {
    return (
        <div className="capture_wrapper">
            <input
                className="input_box"
                placeholder="Date"
                onChange={props.handleDateChange}
                value={props.date} />
            <input
                className="input_box"
                placeholder="Odometer"
                onChange={props.handleOdometerChange}
                value={props.odometer} />
            <button className="enter_button"
                onClick={props.handleSubmitValues}>
                <i className="fa fa-arrow-circle-down fa-4x"></i>
            </button>
        </div>
    )
}
