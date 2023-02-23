import { SignupUserInfo } from "../../../data/types/reduxTypes";
import { signupActionType } from "../../action/singup/signupAction";
import {
  GET_SIGNUP_USER_INFO,
  //   UPDATE_SIGNUP_USER_INFO, -> 초기 회원가입 시 해당 action을 통해 id & password를 저장할 수 있음
} from "../../action/singup/signupAction";

export interface InitSignupState {
  signupUserInfo: SignupUserInfo;
}

const InitState: InitSignupState = {
  signupUserInfo: {
    id: "",
    password: "",
  },
};

export const SignupReducer = (
  initState: InitSignupState = InitState,
  action: signupActionType
) => {
  switch (action.type) {
    case GET_SIGNUP_USER_INFO:
      return {
        ...initState,
        signupUserInfo: {
          id: action.payload.id,
          password: action.payload.password,
        },
      };
  }
};