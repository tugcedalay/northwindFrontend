// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // combineReducers ile oluşturulmuş reducer'lar

const store = configureStore({
  reducer: rootReducer,
});

export default store;
