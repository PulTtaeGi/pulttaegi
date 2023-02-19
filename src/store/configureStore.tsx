import { configureStore } from "@reduxjs/toolkit";
import market, { marketSlice } from "./modules/market";
import review from "./modules/review";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    review,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;