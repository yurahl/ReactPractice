import React from "react";
import activeQuizeStyle from "./ActiveQuize.css";

const ActiveQuize = (props) => (
  <div className={activeQuizeStyle.ActiveQuize}>
    <p className={activeQuizeStyle.Question}>
      <span>
        <strong>1.</strong>
        How are you?
      </span>
    </p>
    <ul>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
    </ul>
  </div>
);

export default ActiveQuize;
