import React, { Component } from "react";
import QuizeStyle from "./Quize.css";
import ActiveQuize from "../components/ActiveQuize/ActiveQuize";

class Quize extends Component {
  state = {
    quize: [],
  };

  render() {
    return (
      <div className={QuizeStyle.Quize}>
        <h1>Quize</h1>
        <div className={QuizeStyle.QuizeWrapper}>
          <ActiveQuize />
        </div>
      </div>
    );
  }
}

export default Quize;
