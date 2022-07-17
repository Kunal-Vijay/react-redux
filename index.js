const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Setting up initial state
const initialState = {
  numOfCakes: 10,
};

// reducer function - (prevState,action) => nextState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
store.dispatch(buyCake());  // doesn't execute since listener is unsubscribed
