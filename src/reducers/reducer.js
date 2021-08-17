import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADD5:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.SUBSTRACT5:
      return { ...state, counter: state.counter - action.value };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
const initialState = { counter: 0 };

export default reducer;
