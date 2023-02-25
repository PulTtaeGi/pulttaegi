import { collection, getDocs } from "firebase/firestore";
import { useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { firestore } from "../api/firebase";
import PrimaryButton from "../components/PrimaryButton";
import Wrapper from "../layouts/Wrapper";
import "../tailwind.css";
import { useAppDispatch } from "../state/store/hooks/configureStore.hook";
import { getUserInfo } from "../store/modules/signup";
import GoogleLoginButton from "../components/common/GoogleButton";

const LOGO_URL = "../../src/assets/icons/logo-icon.png";

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleLogin = useCallback(async () => {
    const usersCollectionRef = collection(firestore, "login");
    const data = await getDocs(usersCollectionRef);

    if (idRef.current?.value === "") {
      alert("아이디를 입력해 주세요");
      return;
    }
    if (pwRef.current?.value === "") {
      alert("비밀번호를 입력해 주세요");
      return;
    }

    for (const doc of data.docs) {
      if (
        doc.data().id === idRef.current?.value &&
        doc.data().pw === pwRef.current?.value
      ) {
        navigate("/");
        return;
      }
    }
    
    if(idRef.current?.value !== undefined && pwRef.current?.value !== undefined) {
      dispatch(getUserInfo({signupUserInfo: {id: idRef.current?.value, password: pwRef.current?.value }}))
      localStorage.setItem("id", idRef.current?.value);
      localStorage.setItem("password", pwRef.current?.value);
      localStorage.setItem("isLogin", "true")
    }
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col items-center h-full mt-28">
        <div className="relative w-[180px]">
          <img
            src={LOGO_URL}
            alt="logo"
            className="block w-[180px] h-[180px]"
          />
          <span className="absolute bottom-[-4px] left-1/2 translate-x-[-50%] block mt-3 text-3xl text-green-4 font-black tracking-tight  whitespace-nowrap">
            풀때기
          </span>
        </div>
        <div className="flex flex-col gap-3 w-80 mt-16 mb-20 text-xl">
          <input
            className="w-full pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"
            type="text"
            ref={idRef}
            placeholder="ID"
          />
          <input
            className="w-full pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"
            ref={pwRef}
            type="password"
            placeholder="PW"
          />
        </div>
        <div className="flex flex-col gap-2">
          
    
          <GoogleLoginButton/>
          <button
            onClick={handleLogin}
            type="submit"
            value="로그인"
            className="w-80 p-3 text-white bg-green-4 text-[20px] font-extrabold tracking-tighter bg-gray-100 rounded-xl"
          >
            로그인
          </button>
          <PrimaryButton link="/signup" color="green-3">
            회원가입
          </PrimaryButton>
        </div>
      </div>
    </Wrapper>
    
  );
}
