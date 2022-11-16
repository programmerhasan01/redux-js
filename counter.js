// state = count - 0
// actions - increment , decrement, reset
// reducer
// store

const { createStore } = require("redux");

// action values
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

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

// reducer
const counterReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
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
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
