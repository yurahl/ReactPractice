import React from "react";
import activeQuizStyle from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
  <div className={activeQuizStyle.ActiveQuize}>
    <p className={activeQuizStyle.Question}>
      <span>
        <strong>1.</strong> &nbsp; How are you?
      </span>
      <small>4 of 10</small>
    </p>
    <AnswersList answers={props.answers} />
  </div>
);

export default ActiveQuiz;
