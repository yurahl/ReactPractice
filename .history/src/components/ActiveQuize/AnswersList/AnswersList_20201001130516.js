import React from "react";
import AnswersListStyle from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => (
  <ul className={AnswersListStyle.AnswersList}>
    {props.answers.map((answer, index) => {
        
    })}
  </ul>
);

export default AnswersList;
