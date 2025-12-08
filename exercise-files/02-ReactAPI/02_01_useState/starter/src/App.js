import { useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";
import Score from "./components/Score";

/*
1 - generate two new random numbers
2 - Add the two random numbers together to get the sum
3 - Compare the sum to the user input
4 - If the sum is equal to the user input, display "You guessed right!"
5 - If the sum is not equal to the user input, display "Try Again :("
*/

const initialState = {
  values: {
    random1: 0,
    random2: 0,
  },
  input: 0,
  result: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "setValues":
      return {
        ...state,
        values: action.payload.values,
      };
    case "setInput":
      return {
        ...state,
        input: action.payload.input,
      };
    case "checkResult":
      return {
        ...state,
        result: action.payload.result,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { input, values, result } = state;

  const generateRandomValues = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    dispatch({ type: "setValues", payload: { values: { random1, random2 } } });
  };

  const guessTheNumber = () => {
    dispatch({
      type: "checkResult",
      payload: { result: values.random1 + values.random2 },
    });
  };

  return (
    <div className="p-5" style={{ width: "80%" }}>
      <fieldset>
        <legend className="text-bold">Guess the Number</legend>
        <Score count={0} />
        <div className="d-flex justify-content-around">
          <Form
            generate={generateRandomValues}
            guess={guessTheNumber}
            onChange={(value) =>
              dispatch({ type: "setInput", payload: { input: value } })
            }
            values={values}
          />
          <Result input={input} result={result} />
        </div>
      </fieldset>
    </div>
  );
}

export default App;
