import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";

/*
1 - generate two new random numbers
2 - Add the two random numbers together to get the sum
3 - Compare the sum to the user input
4 - If the sum is equal to the user input, display "You guessed right!"
5 - If the sum is not equal to the user input, display "Try Again :("
*/

const initialState = {};

function reducer() {}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [values, setValues] = useState({ random1: 0, random2: 0 });
  const [input, setInput] = useState(0);
  const [result, checkResult] = useState(0);

  const generateRandomValues = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    setValues({
      random1,
      random2,
    });
  };

  const guessTheNumber = () => {
    checkResult(values.random1 + values.random2);
  };

  return (
    <div className="p-5" style={{ width: "80%" }}>
      <fieldset>
        <legend className="text-bold">Guess the Number</legend>
        <div className="d-flex justify-content-around">
          <Form
            generate={generateRandomValues}
            guess={guessTheNumber}
            onChange={setInput}
            values={values}
          />
          <Result input={input} result={result} />
        </div>
      </fieldset>
    </div>
  );
}

export default App;
