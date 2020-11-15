import React from "react";
import FinishedQuizStyle from "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  console.log(props);
  return (
    <div className={FinishedQuizStyle.FinishedQuiz}>
      <h2>Quiz result</h2>
      <ul>
        {props.quiz.map((element, index) => {
          let style;
          if (props.state && props.state[element.id]) {
            const answer = props.state[element.id];
            style =
            answer === "success"
                ? `fa fa-check ${FinishedQuizStyle[answer]}`
                : `fa fa-times ${FinishedQuizStyle[answer]}`;
          }
          return (
            <li key={index}>
              <strong>{index + 1}.</strong> &nbsp;{element.question}
              <i className={style}></i>
            </li>
          );
        })}
      </ul>
      <strong>{}</strong>
      <button onClick={() => props.onTryAgainClick()}>Try Again</button>
    </div>
  );
};

export default FinishedQuiz;
