import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// 경로 재설정
const DATA_LINK = "src/data/market.json";

export interface MenuType {
  menuName: string;
  price: string;
}
export interface MarketType {
  id: number;
  title: string;
  img: string;
  address: string;
  menu: Array<MenuType>;
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      // state.push(action.payload);
      return { ...state, ...action.payload };
    });
  },
});

export default marketSlice.reducer;
export const { setData } = marketSlice.actions;
