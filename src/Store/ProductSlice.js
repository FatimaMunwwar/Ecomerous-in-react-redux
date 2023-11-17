import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    searchResults: " ",
  },
  reducers: {
    addToCart(state, action) {
      state.products = [...state.products, action.payload];
    },
    remove(state, action) {
      state.products = state.products.filter(
        (item) => item.title !== action.payload
      );
    },
    clear(state, action) {
      state.products = [];
    },
    search(state, action) {
      state.searchResults = action.payload;
    },
    addAllItem(state, action) {
      const itemtoadd = action.payload;
      state.products = state.products.concat(itemtoadd);
    },
  },
});
export const { addToCart, remove, clear, search, addAllItem } =
  productSlice.actions;
export default productSlice;
