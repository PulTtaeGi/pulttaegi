import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface mapObj {
  map: object;
}

interface mapLat {
  location: {
    latitude: number;
    longitude: number;
  };
}
const initialState: any = {};

export const kakaomapSlice = createSlice({
  name: "kakaomap",
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<mapObj>) => {
      state.map = action.payload.map;
    },
    setLatLng: (state, action: PayloadAction<mapLat>) => {
      state.location = action.payload.location;
    },
  },
});

export default kakaomapSlice.reducer;
export const { setMap, setLatLng } = kakaomapSlice.actions;
