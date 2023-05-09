import { TAKE_NAME } from "../actions/NameActions";

const initialState = {
  name: [],
};

export default function nReducer(state = initialState, actions) {
  if (actions.type === TAKE_NAME) {
    const temp = state.name;
    temp.push(actions.payload);
    return {
      ...state,
      name: temp,
    };
  }
  return state;
}
