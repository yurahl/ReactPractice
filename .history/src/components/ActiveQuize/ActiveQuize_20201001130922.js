import React from "react";
import activeQuizeStyle from "./ActiveQuize.css";
import AnswersList from './AnswersList/AnswersList'

const ActiveQuize = (props) => (
  <div className={activeQuizeStyle.ActiveQuize}>
    <p className={activeQuizeStyle.Question}>
      <span>
        <strong>1.</strong> &nbsp;
        How are you?
      </span>
      <small>4 of 10</small>
    </p>
    <AnswersList/>
  </div>
);

export default ActiveQuize;
