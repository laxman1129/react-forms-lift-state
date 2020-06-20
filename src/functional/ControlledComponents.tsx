import "./Comp.css";
import React, { ChangeEvent, useState } from "react";

const ControlledComponents = () => {
  const [name, setName] = useState("");
  //modify to accept only even numbers
  const [evenNumber] = useState();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // convert to uppercase
    setName(event.target.value.toUpperCase());
  };

  const handleEvenNumbersChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Accept only even numbers
  };

  return (
    <div>
      <h1>Controlled Components</h1>
      <form>
        <div className="alignment">
          <label> Uppercase text : </label>
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            value={name}
          />
        </div>

        {/*Implement filter using controlled component */}
        {/*modify to accept only even numbers */}
        <div className="alignment">
          <label> Even Numbers Only : </label>
          <input
            type="text"
            onChange={(event) => handleEvenNumbersChange(event)}
            value={evenNumber}
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledComponents;
