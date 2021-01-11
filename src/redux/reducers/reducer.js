import * as actionTypes from "../actions";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  let newCount;
  switch (action.type) {
    case actionTypes.INCREMENT_COUNT:
      newCount = state.count + 1;
      return {
        count: newCount,
      };
    case actionTypes.DECREMENT_COUNT:
      newCount = state.count - 1;
      return {
        count: newCount,
      };
  }
  return state;
};

export default reducer;
