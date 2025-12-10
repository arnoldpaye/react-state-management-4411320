import { atom } from "recoil";

const items = [
  { id: 1, task: "pay bills", done: false },
  { id: 2, task: "buy groceries", done: false },
  { id: 3, task: "learn Redux", done: false },
];

const listState = atom({
  key: "listState",
  default: items,
});

const allState = atom({
  key: "allState",
  default: items,
});

const filterState = atom({
  key: "filterState",
  default: false,
});

const inputValue = atom({
  key: "inputValue",
  default: "",
});

export { listState, allState, filterState, inputValue };
