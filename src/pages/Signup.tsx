import { addDoc, collection, getDocs } from "firebase/firestore";
import { useCallback, useRef } from "react";
import { firestore } from "../api/firebase";
import { useNavigate } from "react-router";
import PrimaryButton from "../components/PrimaryButton";
import Wrapper from "../layouts/Wrapper";
import "../tailwind.css";

const LOGO_URL = "../../src/assets/icons/main_logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pwCheckRef = useRef<HTMLInputElement>(null);

  const handleIdCheck = useCallback(async () => {
    const usersCollectionRef = collection(firestore, "login");
    const data = await getDocs(usersCollectionRef);

    if (idRef.current?.value === "") {
      alert("아이디를 입력해 주세요");
      return;
    }

    for (const doc of data.docs) {
      if (doc.data().id === idRef.current?.value) {
        alert("중복된 아이디가 있어요");
        return;
      }
    }

    alert("중복된 아이디가 없어요");
  }, []);

  const handleSignUp = useCallback(async () => {
    if (pwRef.current?.value === "") {
      alert("비밀번호를 입력해 주세요");
      return;
    }

    if (pwRef.current?.value !== pwCheckRef.current?.value) {
      alert("비밀번호가 서로 같지 않아요");
      return;
    }

    const usersCollectionRef = collection(firestore, "login");
    try {
      await addDoc(usersCollectionRef, {
        id: idRef.current?.value,
        pw: pwRef.current?.value,
      }).then(() => {
        alert("회원가입에 성공했어요");
        navigate("/login");
      });
    } catch (e) {
      alert("회원가입에 실패했어요");
      console.error(e);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <div className="flex flex-col items-center h-full mt-20">
          <div className="flex flex-col items-center justify-center relative w-[180px]">
            <img
              src={LOGO_URL}
              alt="logo"
              className="block w-[160px] h-[160px]"
            />
            <p className="block mt-4 text-3xl font-bold text-green-4 whitespace-nowrap">
              회원가입
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-10 mb-10 w-80">
            <div className="flex flex-col gap-1 mb-3">
              <div className="flex flex-row gap-3 text-xl">
                <input
                  ref={idRef}
                  type="text"
                  placeholder="ID"
                  className="w-52 pl-8 p-3 text-xl text-green-4 font-bold bg-gray-100 placeholder-primary rounded-xl outline-0"
                />
                <button
                  onClick={handleIdCheck}
                  className="w-full p-3 text-white bg-green-3 text-[20px] font-bold rounded-xl text-center whitespace-nowrap"
                >
                  중복확인
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-3 text-xl">
                <input
                  ref={pwRef}
                  className="w-full pl-8 p-3 text-xl text-green-4 font-bold bg-gray-100 placeholder-primary rounded-xl outline-0"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <span className="pl-6 tracking-tighter text-green-4">
                영어, 숫자를 조합해주세요
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-3 text-xl">
                <input
                  ref={pwCheckRef}
                  className="w-full pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"
                  type="password"
                  placeholder="Password Check"
                />
              </div>
              <span className="pl-6 tracking-tighter text-green-4">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-8 text-xl w-80">
            <PrimaryButton color="green-3" link="/login">
              취소
            </PrimaryButton>
            <button
              onClick={handleSignUp}
              className="w-full p-3 text-white bg-green-4 text-[20px] font-bold tracking-tight rounded-xl text-center whitespace-nowrap"
            >
              가입
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
