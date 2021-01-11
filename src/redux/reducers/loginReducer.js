import * as actionTypes from "../actions";

const initialState = {
  loggedIn: false,
  username: "",
  userId: null,
};

const loginReducer = (state = initialState, action) => {
  let newLogin;
  switch (action.type) {
    case actionTypes.LOGGED_IN:
      newLogin = !state.loggedIn;
      return {
        ...state,
        loggedIn: newLogin,
      };
    case actionTypes.USERNAME:
      return {
        ...state,
        username: action.username,
      };
  }
  return state;
};

export default loginReducer;
