import React from "react";
import { useState } from "react";
import BackArrow from "../components/common/BackArrow";
import ResultBox from "../components/common/ResultBox";
import FoodSearch from "../components/search/FoodSearch";
import RegionSearch from "../components/search/RegionSearch";
import SearchHeader from "../components/search/SearchHeader";
import { useAppSelector } from "../store/hooks/configureStore.hook";

export default function Search() {
  return (
    <div className="wrapper flex-col flex items-center justify-center h-full w-full mt-10">
      <div className="fixed top-0 bg-white w-[414px] h-[80px] z-10">
        <BackArrow />
      </div>
      <SearchHeader />
      {/* <ResultBox text="강남역" /> */}
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

      {/* <FoodSearch /> */}
      {/* <RegionSearch /> */}
    </div>
  );
}
