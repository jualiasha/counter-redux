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
    case actionTypes.SHOW_RESULTS:
      return {
        ...state,
        results: [...state.results, { value: state.counter, id: new Date() }],
      };
    case actionTypes.REMOVE_RESULTS:
      return {
        ...state,
        results: state.results.filter((results) => results.id !== action.item),
      };
    default:
      return state;
  }
};
const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 20,
    },
    {
      id: 3,
      value: 30,
    },
  ],
};

export default reducer;
