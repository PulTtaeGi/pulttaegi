import { configureStore } from "@reduxjs/toolkit";
import { marketSlice } from "./modules/market";
import { searchSlice } from "./modules/search";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
