import React from "react";
import FinishedQuizStyle from "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  const correctAnswers = () => {
    const result = Object.values(props.state).reduce((acc, element) => {
      const [answer] = Object.values(element);
      return answer === "success" ? ++acc : acc;
    }, 0);
    return result;
  };
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
      <strong className={FinishedQuizStyle.correctAnswers}>Correct {correctAnswers()} of {props.quiz.length}</strong></q>
      <button onClick={() => props.onTryAgainClick()}>Try Again</button>
    </div>
  );
};

export default FinishedQuiz;
