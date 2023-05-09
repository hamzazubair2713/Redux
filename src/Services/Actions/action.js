export const ADD_TO_CART = "increase counter ";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
