import React from 'react';
import AnswersList from '../AnswersList';
import AnswerItemStyle from './AnswerItem.css'

const AnswerItem = props => {

    return (
        <li>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem