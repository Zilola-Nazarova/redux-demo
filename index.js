const CAKE_ORDER = 'CAKE_ORDER';

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
  };
}

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
  anotherPropery: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
