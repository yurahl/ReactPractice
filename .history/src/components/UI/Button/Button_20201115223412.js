import React from 'react';
import buttonStyle from './Button.css';

const Button = props => {

    return (
        <button
          onClick={props.onClick}
          className={}
          disabled={props.disabled}  
        >
            {props.children}
        </button>
    )
}