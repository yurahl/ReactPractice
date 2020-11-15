import React from 'react';
import menuToggleStyle from './MenuToggle.css'

export default props => {
    const classes =[
        menuToggleStyle.menuToggle,
        'fa',
        props.isOpen ? 'fa-times' : 'fa-bars open'
    ]
    return (
        <i
            className={classes.join(' ')}
            onClick={props.onToggle}
        />
    )
}