import React, { Component } from "react";
import QuizeStyle from "./Quize.css";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";

class Quize extends Component {
  state = {
    quize: [
      {
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      },
    ],
  };

  render() {
    return (
      <div className={QuizeStyle.Quize}>
        <div className={QuizeStyle.QuizeWrapper}>
          <h1>Quize</h1>
          <ActiveQuize />
        </div>
      </div>
    );
  }
}

export default Quize;
