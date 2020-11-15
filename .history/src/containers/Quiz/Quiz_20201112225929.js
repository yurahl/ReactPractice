import React, { Component } from "react";
import QuizStyle from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
      answersQuiz: null,
      isFinished: false,
      quiz: [
        {
          question: "What color is sky?",
          rightAnswerId: 2,
          id: 1,
          answers: [
            { text: "yellow", id: 1 },
            { text: "blue", id: 2 },
            { text: "black", id: 3 },
            { text: "pink", id: 4 },
          ],
        },
        {
          question: "What color is sun?",
          rightAnswerId: 3,
          id: 2,
          answers: [
            { text: "red", id: 1 },
            { text: "purple", id: 2 },
            { text: "yellow", id: 3 },
            { text: "green", id: 4 },
          ],
        },
      ],
    };
  }

  onAnswerClickHandler = (answerId) => {
    if (
      this.state.answersQuiz &&
      this.state.answersQuiz[this.state.quiz[this.state.activeQuestion].id] &&
      this.state.answersQuiz[this.state.quiz[this.state.activeQuestion].id][
        answerId
      ] === "success"
    ) {
      return;
    }
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answersQuiz: {
          ...this.state.answersQuiz,
          [this.state.quiz[this.state.activeQuestion].id]: {
            [answerId]: "success",
          },
        },
      });
    } else {
      this.setState({
        answersQuiz: {
          ...this.state.answersQuiz,
          [this.state.quiz[this.state.activeQuestion].id]: "error",
        },
      });
    }

    const timeout = window.setTimeout(() => {
      if (this.state.activeQuestion + 1 < this.state.quiz.length) {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
        });
      } else {
        this.setState({
          isFinished: true,
        });
      }

      window.clearTimeout(timeout);
    }, 500);
  };

  onTryAgainClickHandler = () => {
    this.setState({
      activeQuestion: 0,
      answersQuiz: null,
      isFinished: false,
    });
  };

  render() {
    return (
      <div className={QuizStyle.Quiz}>
        <div className={QuizStyle.QuizWrapper}>
          {this.state.isFinished ? (
            <FinishedQuiz
              state={this.state.answersQuiz}
              quiz={this.state.quiz}
              onTryAgainClick={this.onTryAgainClickHandler}
            />
          ) : (
            <>
              <h1>Please answer all of questions</h1>
              <ActiveQuiz
                onAnswerClick={this.onAnswerClickHandler}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                quizLength={this.state.quiz.length}
                questionId={this.state.quiz[this.state.activeQuestion].id}
                questionNumber={this.state.activeQuestion + 1}
                state={this.state.answersQuiz}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
