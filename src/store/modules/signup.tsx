import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupUserInfo } from "../../data/reduxTypes";

interface SignupInterface {
  signupUserInfo: SignupUserInfo;
}

const initialState: SignupInterface = {
  signupUserInfo: {
    id: "",
    password: "",
  },
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<SignupInterface>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getUserInfo } = SignupSlice.actions;