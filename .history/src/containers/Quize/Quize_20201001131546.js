import React, { Component } from "react";
import QuizStyle from "./Quize.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Question text.",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      },
    ],
  };

  render() {
    return (
      <div className={QuizeStyle.Quize}>
        <div className={QuizeStyle.QuizeWrapper}>
          <h1>Quize</h1>
          <ActiveQuize
            answers={this.quiz.answers}
            question={this.quiz.question}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
