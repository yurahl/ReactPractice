import React from 'react';
import AnswerItemStyle from './AnswerItem.css'

const AnswerItem = props => {
    return (
        <li className={AnswerItemStyle.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem