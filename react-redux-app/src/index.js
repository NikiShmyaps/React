import { createStore } from "redux";

const decrement = document.getElementById("dec"),
  increment = document.getElementById("inc"),
  dropp = document.getElementById("drop"),
  counter = document.getElementById("counter");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "DROP":
      return (state = 0);
    default:
      return state;
  }
};

const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const drop = () => ({ type: "DROP" });
const store = createStore(reducer);
const update = () => {
  counter.innerText = store.getState();
};
store.subscribe(update);

decrement.addEventListener("click", () => store.dispatch(dec()));
increment.addEventListener("click", () => store.dispatch(inc()));
dropp.addEventListener("click", () => store.dispatch(drop()));