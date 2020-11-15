import React from "react";
import AnswersListStyle from "./AnswersList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
  console.log('State', props.state);
  console.log('questionId', props.questionId);
  console.log(props.state && props.state[props.questionId] ? props.state[props.questionId] : null);
  return (
  <ul className={AnswersListStyle.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswerItem
        onAnswerClick={props.onAnswerClick}
        answer={answer}
        key={index}
        state={
          props.state && props.state[props.questionId] ? props.state[props.questionId] : null
        }
      />
    ))}
  </ul>
)};

export default AnswersList;
