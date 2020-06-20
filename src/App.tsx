import React from "react";
import "./App.css";
import ControlledComponents from "./functional/ControlledComponents";
import UncontrolledComponents from "./functional/UncontrolledComponents";

function App() {
  return (
    <div className="container">
      <div className="section">
        <ControlledComponents />
      </div>
      <div className="section">
        <UncontrolledComponents />
      </div>
    </div>
  );
}

export default App;
