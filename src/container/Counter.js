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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
