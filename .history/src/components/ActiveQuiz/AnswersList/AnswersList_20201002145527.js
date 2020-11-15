import React from "react";
import AnswersListStyle from "./AnswersList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => (
  console.log(props.state);
  <ul className={AnswersListStyle.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswerItem
        onAnswerClick={props.onAnswerClick}
        answer={answer}
        key={index}
        state={
          props.state && props.state[answer.id] ? props.state[answer.id] : null
        }
      />
    ))}
  </ul>
);

export default AnswersList;
