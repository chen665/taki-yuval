import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0); // [0, function

  const addOne = () => {
    setCounter((counter) => counter + 1);
    console.log(counter);
  };

  const addTwo = () => {
    setCounter((counter) => counter + 2);
    console.log(counter);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={addOne}>Add One +1 {counter}</button>
      <button onClick={addTwo}>Add One +2 {counter}</button>
    </div>
  );
}

export default App;
