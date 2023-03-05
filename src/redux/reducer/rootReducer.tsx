import { combineReducers } from "redux";

import { SignupReducer } from "./signup/signupReducer";

export const rootReducer = combineReducers({
  SignupReducer,
});