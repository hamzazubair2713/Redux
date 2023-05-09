export const TAKE_NAME = "INPUT NAME";

export function takeName(data) {
  return {
    type: TAKE_NAME,
    payload: data,
  };
}
