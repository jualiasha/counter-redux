import React from "react";
import Button from "../Button.jsx";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

const Counter = ({
  ctr,
  onIncCounter,
  onDecCounter,
  onAdd5Counter,
  onSubstract5Counter,
  onResetCounter,
  storeResults,
  onShowResults,
  onRemoveResults,
}) => {
  return (
    <div>
      <h1>Your score is: {ctr}</h1>
      <div className="counter-buttons">
        <Button click={onIncCounter}>Increment</Button>
        <Button click={onDecCounter}>Decrement</Button>
        <Button click={onAdd5Counter}>Add5</Button>
        <Button click={onSubstract5Counter}>Substract5</Button>
        <Button click={onResetCounter}>Reset</Button>
      </div>
      <Button click={onShowResults}>Store the Results</Button>

      <ul>
        {storeResults.map((result) => {
          return (
            <li key={result.id} onClick={() => onRemoveResults(result.id)}>
              {result.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storeResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd5Counter: () => dispatch({ type: actionTypes.ADD5, value: 5 }),
    onSubstract5Counter: () =>
      dispatch({ type: actionTypes.SUBSTRACT5, value: 5 }),
    onResetCounter: () => dispatch({ type: actionTypes.RESET }),
    onShowResults: () => dispatch({ type: actionTypes.SHOW_RESULTS }),
    onRemoveResults: (id) =>
      dispatch({ type: actionTypes.REMOVE_RESULTS, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
