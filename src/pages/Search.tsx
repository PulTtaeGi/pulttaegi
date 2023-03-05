import React from "react";
import BackArrow from "../components/common/BackArrow";
import SearchHeader from "../components/search/SearchHeader";

export default function Search() {
  return (
    <div className="wrapper flex-col flex items-center justify-center h-full w-full mt-10">
      <div className="fixed top-0 bg-white w-[414px] h-[80px] z-10">
        <BackArrow />
      </div>
      <SearchHeader />
    </div>
  );
}
