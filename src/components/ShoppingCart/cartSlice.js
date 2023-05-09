const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
  cart: [],
  prices: "",
  itemsCheckout: [],
};
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    storeProducts(state, action) {
      return {
        ...state,
        products: action.payload,
      };
    },
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      const filterData = state.cart.filter(
        (elem) => elem.id !== action.payload
      );
      return {
        ...state,
        cart: filterData,
      };
    },
    totalAmout(state, action) {
      state.prices = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { storeProducts, add, remove, totalAmout } = cartSlice.actions;
export default cartSlice.reducer;
