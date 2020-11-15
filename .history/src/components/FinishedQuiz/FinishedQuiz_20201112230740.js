import React from "react";
import FinishedQuizStyle from "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  return (
    <div className={FinishedQuizStyle.FinishedQuiz}>
      <h2>Quiz result</h2>
      <ul>
        {props.quiz.map((element, index) => {
          let style;
          if (props.state && props.state[element.id]) {
            const answerObject = props.state[element.id];
            const [state] = Object.values(answerObject);

            style =
              state === "success"
                ? `fa fa-check ${FinishedQuizStyle[state]}`
                : `fa fa-times ${FinishedQuizStyle[state]}`;
          }
          return (
            <li key={index}>
              <strong>{index + 1}.</strong> &nbsp;{element.question}
              <i className={style}></i>
            </li>
          );
        })}
      </ul>
      <strong></strong>
      <button onClick={() => props.onTryAgainClick()}>Try Again</button>
    </div>
  );
};

export default FinishedQuiz;
