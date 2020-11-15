import React from "react";
import AnswerItemStyle from "./AnswerItem.css";

const AnswerItem = (props) => {
  const styleClasses = [AnswerItemStyle.AnswerItem];

  if (props.state) {
    styleClasses.push(AnswerItemStyle[props.state]);
  }

  return (
    <li
      onClick={() => props.onAnswerClick(props.answer.id)}
      className={styleClasses.join(" ")}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
