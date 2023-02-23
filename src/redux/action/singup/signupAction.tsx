import { createAction } from "typesafe-actions";
import { SignupUserInfo } from "../../../data/types/reduxTypes";

export const GET_SIGNUP_USER_INFO = "GET_SIGNUP_USER_INFO" as const;
export const UPDATE_SIGNUP_USER_INFO = "UPDATE_SIGNUP_USER_INFO" as const;

export const getSignupUserInfo =
  createAction(GET_SIGNUP_USER_INFO)<SignupUserInfo>();
export const updateSignupUserInfo = createAction(
  UPDATE_SIGNUP_USER_INFO
)<SignupUserInfo>();

export type signupActionType =
  | ReturnType<typeof getSignupUserInfo>
  | ReturnType<typeof updateSignupUserInfo>;