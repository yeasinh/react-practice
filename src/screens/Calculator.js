import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {buttons.map((button) => (
            <button key={button} onClick={() => handleClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
