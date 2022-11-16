// state = count - 0
// actions - increment , decrement, reset
// reducer
// store

const { createStore } = require("redux");

// action values
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state
const initialState = {
  count: 0,
};

// action creator
const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};
const reset = () => {
  return { type: RESET };
};
const incrementByValue = (value) => {
  return { type: INCREMENT_BY_VALUE, payload: value };
};

// reducer
const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// subscribe
store.subscribe(() => console.log(store.getState()));

// dispatching
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(reset());
store.dispatch(incrementByValue(5));
