import { configureStore } from "@reduxjs/toolkit";
import { marketSlice } from "./modules/market";
import { searchSlice } from "./modules/search";
import { reviewSlice } from "./modules/review";
import { kakaomapSlice } from "./modules/kakaomap";
import { SignupSlice } from "./modules/signup";

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    review: reviewSlice.reducer,
    search: searchSlice.reducer,
    kakaomap: kakaomapSlice.reducer,
    signup: SignupSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
