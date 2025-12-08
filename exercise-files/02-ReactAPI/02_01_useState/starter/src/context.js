import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  count: 0,
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

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
