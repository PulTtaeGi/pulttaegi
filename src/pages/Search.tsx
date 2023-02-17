import React from "react";
import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchHeader from "../components/search/SearchHeader";
import Wrapper from "../layouts/Wrapper";

export default function Search() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center w-full h-full mx-8 mt-12">
        <SearchHeader />
        <SearchBar />
        {/* 검색하기 전 화면 */}
        {/* <div className="flex flex-col gap-6 mt-8 w-full">
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
        </div> */}
        {/* 검색했을 때의 화면 */}
        <div className="flex flex-col gap-6 mt-8 w-full">
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
        </div>
      </div>
    </Wrapper>
  );
}
