import React from "react";
import "./App.css";
import ControlledComponents from "./functional/ControlledComponents";
import UncontrolledComponents from "./functional/UncontrolledComponents";
import NestedWithoutStateLifting from "./functional/nested/NestedWithoutStateLifting";
import NestedWithStateLifting from "./functional/nested/NestedWithStateLifting";

function App() {
  return (
    <div className="container">
      <div className="section">
        <ControlledComponents />
      </div>
      <div className="section">
        <UncontrolledComponents />
      </div>
      <hr />
      <div className="section">
        <NestedWithoutStateLifting />
      </div>

      <div className="section">
        <NestedWithStateLifting />
      </div>
    </div>
  );
}

export default App;
