import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Quiz />
        </Layout>
      </div>
    );
  }
}

export default App;
