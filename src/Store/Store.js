import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";

// import {  persistReducer } from 'redux-persist'
import productSlice from "./ProductSlice";
import storage from 'redux-persist/lib/storage'
import visibilitySlice from "./VisibilitySlice";
import favouriteSlice from "./FavouriteSlice";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  product: productSlice.reducer,
  visibility: visibilitySlice.reducer,
  favouriteItem: favouriteSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
