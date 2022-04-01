import React, { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setresult] = useState("");
  const listArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
    "*",
    "+",
    "-",
  ];
  const handleKeyDown = (e) => {
    if (!(listArr.indexOf(e.key) == -1)) {
      result === "Error" || result === "0"
        ? setresult(e.key)
        : setresult(result.concat(e.key));
    }
    switch (e.key) {
      case "Enter":
        evaluate();
        break;
      case "Backspace":
        del();
        break;
      case "Escape":
        clear();
        break;
      default:
        break;
    }
  };

  const handleClick = (e) => {
    result === "Error" || result === "0"
      ? setresult(e.target.name)
      : setresult(result.concat(e.target.name));
  };

  const clear = () => {
    setresult("");
  };

  const del = () => {
    setresult(result.slice(0, -1));
  };

  const evaluate = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("Error");
    }
  };

  const forceFocused = () => {
    document.getElementById("focused").focus();
  };
  useEffect(() => {
    document.getElementById("focused").focus();
  });

  return (
    <div className="container">
      <input
        id="focused"
        onBlur={forceFocused}
        onKeyDown={handleKeyDown}
        readOnly={true}
        type="text"
        className="result"
        value={result}
      />
      <div className="calculator">
        <button id="ac" className="twoSpan" onClick={clear}>
          AC
        </button>
        <button id="del" onClick={del}>
          DEL
        </button>
        <button id="/" name="/" onClick={handleClick}>
          /
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button id="eval" className="twoSpan" onClick={evaluate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
