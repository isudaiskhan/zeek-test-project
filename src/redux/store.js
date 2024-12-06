import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/index.js";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});
