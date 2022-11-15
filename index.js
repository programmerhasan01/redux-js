// 1. state 2. dispatch action 3.reducer 4. store

const { createStore } = require("redux");
// defining constants for action value
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// defining state
const initialCounterState = {
  count: 0,
};

// defining action
const incrementCounter = () => {
  return { type: INCREMENT };
};
const decrementCounter = () => {
  return { type: DECREMENT };
};

// create reducer for counter
const countReducer = (state = initialCounterState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

// store && store methods (getState(), dispatch(), subscribe())
// creating store
const store = createStore(countReducer);

// subscribe
store.subscribe(() => console.log(store.getState()));

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
