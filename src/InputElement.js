import { useState } from "react";
import axios from "axios";

const InputElement = (props) => {
  const [elemVar, updateElemVar] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:80/fibonacci/${elemVar}`)
      .then((resp) =>
        props.updateResults(resp.data.fibonacci, resp.data.sorted)
      );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        How many Fibonacci numbers would you like?:
        <input
          type="number"
          onChange={(e) => updateElemVar(e.target.valueAsNumber)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default InputElement;
