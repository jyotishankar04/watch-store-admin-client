import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./features/adminInfoSlice";

export const store = configureStore({
  reducer: {
    adminReducer: adminSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
