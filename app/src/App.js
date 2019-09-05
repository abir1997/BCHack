import React, { Component } from "react";
import ReactDOM from "react-dom";
import CostComponent from "./Components/CostComponent";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CostComponent />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
