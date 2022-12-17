import "./App.css";
import { useState } from "react";
import InputElement from "./InputElement";
import DisplaySequences from "./DisplaySequences";

function App() {
  const [fibonacci, updateFibonacci] = useState([]);
  const [sorted, updateSorted] = useState([]);

  const updateResults = (fiboArr, sortArr) => {
    updateFibonacci(fiboArr);
    updateSorted(sortArr);
  };
  return (
    <div className="App">
      <h4>Fibonacci Sequence Generator</h4>
      <InputElement updateResults={updateResults} />
      <DisplaySequences fibonacci={fibonacci} sorted={sorted} />
    </div>
  );
}

export default App;
