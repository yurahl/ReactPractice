import React from "react";
import activeQuizStyle from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
  <div className={activeQuizStyle.ActiveQuiz}>
    <p className={activeQuizStyle.Question}>
      <span>
        <strong>1.</strong> &nbsp; {props.question}
      </span>
      <small>4 of 10</small>
    </p>

    <AnswersList onAnswerClick={props.onAnswerClick} answers={props.answers} />
  </div>
);

export default ActiveQuiz;
