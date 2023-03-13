import React from "react";
import { useState } from "react";

const UseState = () => {
  const [text, setText] = useState("Hello world");

  const handleClick = () => {
    setText("I have been changed");
  };
  return (
    <div>
      <h3>React Page</h3>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click to change</button>
    </div>
  );
};

export default UseState;
