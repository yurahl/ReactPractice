import React from 'react';
import menuToggleStyle from './MenuToggle.css'

export default props => {
    const classes =[
        menuToggleStyle.MenuToggle,
        'fa',
        props.isOpen ? `fa-times ${menuToggleStyle.open}` : 'fa-bars'
    ]
    console.log(classes);
    return (
        <i
            className={classes.join(' ')}
            onClick={props.onToggle}
        />
    )
}