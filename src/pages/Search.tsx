import React from "react"
import { useState } from "react"
import Wrapper from "../layouts/Wrapper"
import styles from "../styles/ActiveClass.module.css"

export default function Search () {
    const [isRegion, setIsRegion] = useState<boolean>(true)

    function handleCategory(e: React.MouseEvent<HTMLButtonElement>) {
        e.currentTarget.value === "지역 검색" 
            ? setIsRegion(true) 
            : null

        e.currentTarget.value === "음식 검색" 
            ? setIsRegion(false) 
            : null
        
    }

    return (
        <Wrapper>
            <div className="flex flex-col items-center w-full h-full mx-8 mt-12">
                <div className="flex items-center w-full justify-start">
                    <img src="../../src/assets/images/back.png" alt="backButton" className="w-[22px] h-[22px]"></img>
                </div>
                <div className="flex gap-6 justify-start w-full mt-8">
                    <button onClick={handleCategory} value="지역 검색" 
                            className={`text-gray-400 text-2xl tracking-tighter font-semibold ${isRegion ? styles.active : ""}`}>
                        지역 검색
                    </button>
                    <button onClick={handleCategory} value="음식 검색" 
                            className={`text-gray-400 text-2xl tracking-tighter font-semibold ${isRegion ? "" : styles.active}`}>
                        음식 검색
                    </button>
                </div>
                <div className="flex justify-between w-full mt-4 p-3 bg-gray-100 rounded-3xl">
                    <input type="text" placeholder="음식명을 입력해주세요" className="bg-gray-100 ml-3 text-[17px] text-black placeholder-gray-600 font-bold outline-0"></input>
                    <button type="submit">
                        <img src="../../src/assets/images/search.png" alt="serachButton" className="w-[25px] h-[25px]"></img>
                    </button>
                </div>
                {/* 검색하기 전 화면 */}
                <div className="flex flex-col gap-6 mt-8 w-full">
                    <span className="block pb-2 text-2xl tracking-tight font-bold border-b-gray-300 border-b-2">
                        최근 검색어
                    </span>
                    <ul className="flex flex-col">
                        <li className="flex justify-between p-3 pr-4 text-xl font-bold">
                            <span>검색어1</span>
                            <button type="button">x</button>
                        </li>
                        <li className="flex justify-between p-3 pr-4 text-xl font-bold">
                            <span>검색어2</span>
                            <button type="button">x</button>
                        </li>
                        <li className="flex justify-between p-3 pr-4 text-xl font-bold">
                            <span>검색어3</span>
                            <button type="button">x</button>
                        </li>
                    </ul>
                </div>
                {/* 검색했을 때의 화면 */}
                {/* <div className="flex flex-col gap-6 mt-8 w-full">
                    <span className="block pb-2 text-2xl tracking-tight font-bold border-b-gray-300 border-b-2">
                        검색 결과
                    </span>
                    <ul className="flex flex-col">
                        <li className="flex justify-between p-3 pr-4 text-[22px] font-extrabold">
                            <span className="text-green-4">강남역</span>
                        </li>
                        <li className="flex justify-between p-3 pr-4 text-[22px] font-extrabold">
                            <span className="text-green-4">강남구청</span>
                        </li>
                        <li className="flex justify-between p-3 pr-4 text-[22px] font-extrabold">
                            <span className="text-green-4">강남구</span>
                        </li>
                    </ul>
                </div> */}
            </div>
        </Wrapper>
    )
}