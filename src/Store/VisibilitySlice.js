import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    visibleCount: 4,
  },
  reducers: {
    showMore(state, action) {
      state.visibleCount += action.payload;
    },
    showLess(state, action) {
      state.visibleCount -= action.payload;
    },
  },
});
export const { showMore, showLess } = visibilitySlice.actions;
export default visibilitySlice;
