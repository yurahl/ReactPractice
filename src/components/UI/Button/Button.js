import React from 'react';
import buttonStyle from './Button.css';

export default props => {
    const classes=[
        buttonStyle.Button,
        buttonStyle[props.type]
    ]

    return (
        <button
          onClick={props.onClick}
          className={classes.join(' ')}
          disabled={props.disabled}  
        >
            {props.children}
        </button>
    )
}