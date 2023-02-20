import { configureStore } from "@reduxjs/toolkit";
import market, { marketSlice } from "./modules/market";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
