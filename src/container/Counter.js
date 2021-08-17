import React from "react";
import Button from "../Button.jsx";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

const Counter = ({
  ctr,
  onIncCounter,
  onDecCounter,
  onAdd5,
  onSubstract5,
  onReset,
}) => {
  return (
    <div>
      <h1>Your score is: {ctr}</h1>
      <div className="counter-buttons">
        <Button click={onIncCounter}>Increment</Button>
        <Button click={onDecCounter}>Decrement</Button>
        <Button click={onAdd5}>Add5</Button>
        <Button click={onSubstract5}>Substract5</Button>
        <Button click={onReset}>Reset</Button>
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
    onAdd5: () => dispatch({ type: actionTypes.ADD5 }),
    onSubstract5: () => dispatch({ type: actionTypes.SUBSTRACT5 }),
    onReset: () => dispatch({ type: actionTypes.RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
