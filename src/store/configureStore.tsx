import { configureStore } from "@reduxjs/toolkit";
import market, { marketSlice } from "./modules/market";
import { searchSlice } from "./modules/search";

import review from "./modules/review";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    review,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
