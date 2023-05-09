import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../actions/counterActions";
const initialState = {
  counter: 0,
};

export default function cReducer(state = initialState, actions) {
  if (actions.type === INCREMENT_COUNTER) {
    return {
      ...state,
      counter: state.counter + actions.payload,
    };
  }
  if (actions.type === DECREMENT_COUNTER) {
    return {
      ...state,
      counter: state.counter - actions.payload,
    };
  }
  return state;
}
