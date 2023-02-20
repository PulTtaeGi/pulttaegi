import { configureStore } from "@reduxjs/toolkit";
import market, { marketSlice } from "./modules/market";
import { searchSlice } from "./modules/search";

import review from "./modules/review";

import { kakaomapSlice } from "./modules/kakaomap";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    review,
    search: searchSlice.reducer,
    kakaomap: kakaomapSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
