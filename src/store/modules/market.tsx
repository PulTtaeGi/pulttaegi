import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketType } from "../../typings/marketType";
const DATA_LINK = "/market.json";

const initialState: MarketType[] = [];

export const fetchMarkets = createAsyncThunk("markets/allMarkets", async () => {
  try {
    const response = await fetch(DATA_LINK, {
      headers: {
        Accept: "application / json",
      },
    });

    console.log(response);
    return (await response.json()) || [];
  } catch (err) {
    console.log(err);
  }
  return null;
});

export const marketSlice = createSlice({
  name: "markets",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<MarketType>) => {
      return { ...state, ...action.payload };
    },

    deleteData: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      // state.push(action.payload);
      return { ...state, ...action.payload };
    });
  },
});

export default marketSlice.reducer;
export const { setData, deleteData } = marketSlice.actions;
