import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketType } from "../../typings/marketType";

const initialState: Array<MarketType> = [];

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResultAction: (state, action: PayloadAction<Array<MarketType>>) => {
      return [...action.payload];
    },
  },
});

export default resultSlice.reducer;
export const { setResultAction } = resultSlice.actions;
