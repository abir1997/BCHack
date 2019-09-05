import React, { Component } from "react";
import ReactDOM from "react-dom";
import ConfirmationCard from "./Confirmation.js";

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <ConfirmationCard />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
