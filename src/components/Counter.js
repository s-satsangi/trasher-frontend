import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    counter: state.reducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCount: () => dispatch({ type: actionTypes.INCREMENT_COUNT }),
    onDecrementCount: () => dispatch({ type: actionTypes.DECREMENT_COUNT }),
  };
};

function Counter(props) {
  return (
    <div>
      <div>{props.counter}</div>
      <button onClick={props.onIncrementCount}>increment count</button>
      <button onClick={props.onDecrementCount}>decrement count</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
