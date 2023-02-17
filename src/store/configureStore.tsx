import { configureStore } from "@reduxjs/toolkit"
import market, { marketSlice} from "./modules/market";

const store = configureStore({
    reducer: {
       market : marketSlice.reducer,
    },
});

// state의 기본 타입
export type RootState = ReturnType<typeof store.getState>; 
// dispatch의 기본타입
export type AppDispatch = typeof store.dispatch; 

export default store;