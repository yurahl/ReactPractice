import React from "react";
import activeQuizStyle from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
  <div className={activeQuizStyle.ActiveQuiz}>
    <p className={activeQuizStyle.Question}>
      <span>
        <strong>{props.questionNumber}.</strong> &nbsp; {props.question}
      </span>
      <small>
        {props.questionNumber} of {props.quizLength}
      </small>
    </p>

    <AnswersList
      onAnswerClick={props.onAnswerClick}
      answers={props.answers}
      state={props.state}
      questionId={props.questionId}
    />
  </div>
);

export default ActiveQuiz;
