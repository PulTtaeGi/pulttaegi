import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/configureStore.hook";

interface SearchType {
  keyword: string;
}

const initialState: SearchType = { keyword: "" };

export const searchSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    setDataAction: (state, action: PayloadAction<SearchType>) => {
      return { ...state, keyword: action.payload.keyword };
    },
  },
});

export default searchSlice.reducer;
export const { setDataAction } = searchSlice.actions;
