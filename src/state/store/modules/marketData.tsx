import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  img: "",
  address: "",
  menu: [],
  lat: 0,
  lng: 0,

  calorie: 366,
  taste: 5,
  clean: 4,
};
export const marketSlice = createSlice({
  name: "markets",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default marketSlice.reducer;
export const { setData } = marketSlice.actions;
