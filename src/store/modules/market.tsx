import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const DATA_LINK = "/market.json";

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
  isfavorite: boolean;
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

    deleteData : (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
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
export const { setData , deleteData} = marketSlice.actions;
