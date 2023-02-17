import React from "react";
import "../tailwind.css"
import Wrapper from "../layouts/Wrapper";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";

export default function Login () {
    const LOGO_URL = "../../src/assets/icons/logo-icon.png"

    return (
        <Wrapper>
            <div className="flex flex-col items-center h-full mt-28">
                <div className="relative w-[180px]">
                    <img src= {LOGO_URL} alt="logo" className="block w-[180px] h-[180px]"></img>
                    <span className="absolute bottom-[-4px] left-1/2 translate-x-[-50%] block mt-3 text-3xl text-green-4 font-black tracking-tight  whitespace-nowrap">
                        풀때기
                    </span>
                </div>
                <div className="flex flex-col gap-3 w-80 mt-16 mb-20 text-xl">
                    <PrimaryInput type="text">ID</PrimaryInput>
                    <PrimaryInput type="password">Password</PrimaryInput>
                </div>
                <div className="flex flex-col gap-2">
                    <PrimaryButton link="no" color="green-3">Google로 로그인</PrimaryButton>
                    <input type="submit" value="로그인" className="w-80 p-3 text-white bg-green-4 text-[20px] font-extrabold tracking-tighter bg-gray-100 rounded-xl"></input>
                    <PrimaryButton link="/signup" color="green-3">회원가입</PrimaryButton>
                </div>
            </div>
        </Wrapper>
    )
}