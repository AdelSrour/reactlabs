import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/Home/homeSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export default store;
