import React from 'react';
import "./inputData.css";
//  props are the parameters passed down to the component that will represent the desired value.
export function InputData(props) {
    // Here goeds any js function
    return (
        // HTML goes here
        <span>
            <input />
            <button className="inputButton"><strong>{props.buttonType}</strong></button>
        </span>
    )
}