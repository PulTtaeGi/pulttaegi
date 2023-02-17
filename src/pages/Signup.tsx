import React from "react"
import "../tailwind.css"
import Wrapper from "../layouts/Wrapper"
import PrimaryButton from "../components/common/PrimaryButton"
import PrimaryInput from "../components/common/PrimaryInput"

export default function Signup () {
    const LOGO_URL = "../../src/assets/icons/logo-icon.png"

    return (
        <Wrapper>
            <div className="flex flex-col items-center h-full mt-28">
                <div className="relative w-[180px]">
                    <img src= {LOGO_URL} alt="logo" className="block w-[180px] h-[180px]"></img>
                    <span className="absolute bottom-0 left-1/2 translate-x-[-50%] block text-3xl text-green-4 font-black tracking-tight whitespace-nowrap">
                        회원가입
                    </span>
                </div>
                <div className="flex flex-col gap-3 mt-16 mb-20 w-80">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-3 text-xl">
                            <input type="text" placeholder="ID" className="w-52 pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"></input>
                            <PrimaryButton color="green-3" link="no">중복확인</PrimaryButton>
                        </div>
                        <span className="pl-6 tracking-tighter text-green-4">중복된 아이디입니다</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-3 text-xl">
                            <PrimaryInput type="password">Password</PrimaryInput>
                        </div>
                        <span className="pl-6 tracking-tighter text-green-4">영어, 숫자를 조합해주세요</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-3 text-xl">
                            <PrimaryInput type="password">Password Check</PrimaryInput>
                        </div>
                        <span className="pl-6 tracking-tighter text-green-4">비밀번호가 일치하지 않습니다.</span>
                    </div>
                </div>
                <div className="flex flex-row gap-8 text-xl w-80">
                    <PrimaryButton color="green-3" link="/login">취소</PrimaryButton>
                    <PrimaryButton color="green-4" link="no">가입</PrimaryButton>
                </div>
            </div>
        </Wrapper>
    )
}