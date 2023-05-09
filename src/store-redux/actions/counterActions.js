export const INCREMENT_COUNTER = "increase counter by one";
export const DECREMENT_COUNTER = "decrement counter by one";

export function incrementCounter(data) {
  return {
    type: INCREMENT_COUNTER,
    payload: data,
  };
}
export function decrementCounter(data) {
  return {
    type: DECREMENT_COUNTER,
    payload: data,
  };
}
