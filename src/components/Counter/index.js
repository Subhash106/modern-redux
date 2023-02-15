import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h2>Count: {props.count}</h2>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function increment() {
  return { type: "Increment" };
}

function decrement() {
  return { type: "Decrement" };
}

function incrementAsync() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 2000);
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(incrementAsync()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
