const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// Setting up initial state
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecreams: 20,
};

// reducer function - (prevState,action) => nextState
const cakeReducer = (state = initialCakeState, action) => {
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
const icecreamReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(reducers);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
