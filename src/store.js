import { configureStore } from "@reduxjs/toolkit";
import beansReducer from "../src/features/beans/beansSlice";

export const store = configureStore({
  reducer: {
    beans: beansReducer,
  },
});
