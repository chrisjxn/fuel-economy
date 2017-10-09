import React from 'react';
import './List.css';


export default function List(props) {
    return (
        <tr>
            <td className="left_column">{props.date}</td>
            <td className="center_column">{props.odometer}</td>
            <td className="right_column">{props.notes}</td>
            <button 
            className="edit_button" 
            onClick={() => props.handleViewRefuel(props.index)}>
            <i class="fa fa-pencil-square-o"></i>
            </button>
        </tr>
    )
}

