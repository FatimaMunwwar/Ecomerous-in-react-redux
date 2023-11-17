import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favouriteItem",
  initialState: {
    favouriteProduct: [],
  },
  reducers: {
    Handlefavourite(state, action) {
      const product = state.favouriteProduct.find(
        (findproduct) => findproduct.id === action.payload.id
      );
      product
        ? state.favouriteProduct.splice(product, 1)
        : state.favouriteProduct.push(action.payload);
    },
    removeAllItem(state, action) {
      state.favouriteProduct = [];
    },
    deleteItem(state, action) {
      state.favouriteProduct = state.favouriteProduct.filter(
        (name) => name.title !== action.payload
      );
    },
  },
});
export const { Handlefavourite, removeAllItem, deleteItem } =
  favouriteSlice.actions;
export default favouriteSlice;
