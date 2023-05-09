const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
  cart: [],
  prices: 0,
  itemsCheckout: [],
};
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add(state, action) {
      console.log("state", state);
      state.products.push(action.payload);
    },
    remove(state, action) {
      const temp = state.products.filter((elem, ind) => {
        console.log(action.payload, elem.id, elem.id !== action.payload);
        if (elem.id !== action.payload) {
          return elem;
        }
      });
      return {
        ...state,
        products: temp,
      };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
