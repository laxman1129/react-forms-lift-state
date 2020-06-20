import React, { useRef, MouseEvent } from "react";

const UncontrolledComponents = () => {
  const textRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    // ! asserts that textRef.current is not null. Typescript  post-fix expression operator.
    textRef.current!.focus();

    //prevent default action
    event.preventDefault();
  };

  return (
    <div>
      <h1>Uncontrolled Components</h1>
      <form>
        <label>Input text : </label>
        <input type="text" ref={textRef} />
        {/*inline style */}
        <div style={{ float: "right" }}>
          <button onClick={(event) => handleButtonClick(event)}>
            Focus the input
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledComponents;
