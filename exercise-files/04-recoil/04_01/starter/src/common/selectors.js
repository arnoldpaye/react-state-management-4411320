import { selector } from "recoil";
import { listState, allState, filterState } from "./atoms";

const listItems = selector({
  key: "listItems",
  get: ({ get }) => {
    const all = get(allState);
    const bool = get(filterState);
    if (bool) {
      return all.filter((item) => item.done);
    }
    return all;
  },
});

const itemsCount = selector({
  key: "itemsCount",
  get: ({ get }) => {
    const list = get(listState);
    return list.some((items) => items.done);
  },
});

export { listItems, itemsCount };
