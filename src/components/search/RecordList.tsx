import React, { useEffect, useState } from "react";
import { RecordProps } from "../../constants/typings/searchType";
import RecordItem from "./RecordItem";

const RecordList = ({
  keywords,
  onRemoveKeyword,
  onClearKeywords,
}: RecordProps) => {
  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  return (
    <div className="flex flex-col gap-6 mt-4 w-[93%]">
      <div className="flex flex-row border-b-2 justify-between">
        <span className="block pl-2 pb-2 text-2xl tracking-tight font-bold border-b-gray-300 ">
          최근 검색어
        </span>
        <button type="button" className="pr-4 " onClick={onClearKeywords}>
          전체 지우기 x
        </button>
      </div>
      {keywords.length === 0 ? (
        <div className="font-bold text-gray-700 pl-4">
          최근 검색어 내역이 없습니다.
        </div>
      ) : (
        <ul className="flex flex-col">
          {keywords.map((keyword, idx: number) => (
            <RecordItem
              key={idx}
              keyword={keyword}
              onRemoveKeyword={onRemoveKeyword}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecordList;
