import React, { Component } from "react";
import QuizeStyle from "./Quize.css";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";

class Quize extends Component {
  state = {
    quize: [
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
          <ActiveQuize answers={this.quize.answers} question={this.quize.question}/>
        </div>
      </div>
    );
  }
}

export default Quize;
