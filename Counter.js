/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>{" "}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onDecrementAsync}>Decrement after 1 second</button> <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired,
};

export default Counter;
