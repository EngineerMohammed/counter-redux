import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import authCounter from "./AuthSlice";

const store = configureStore({
  reducer: { Counter: counterReducer, auth: authCounter },
});

export default store;
