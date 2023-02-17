import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/configureStore.hook";

interface MenuType {
  menuName: string;
  price: string;
}

interface MarketType {
  id: number;
  title: string;
  img: string;
  address: string;
  menus: Array<MenuType>;
  lat: number;
  lng: number;
  category: string;
  clean: number;
  taste: number;
  calorie: number;
}

const initialState: MarketType[] = [];

export const fetchMarkets = createAsyncThunk("markets/allMarkets", async () => {
  try {
    const response = await fetch("src/data/market.json");
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default marketSlice.reducer;
export const { setData } = marketSlice.actions;
