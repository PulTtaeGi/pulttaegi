import React, { useEffect, useState } from "react";
import RecordItem from "./RecordItem";

export const SEARCH_COOKIE = "searchs";
export interface KeywordType {
  text: string;
  id: number;
}
export interface RecordProps {
  keywords?: string[];
  onRemoveKeyword: (id: number) => void;
  onClearKeywords: () => void;
}
const RecordList = ({ onRemoveKeyword, onClearKeywords }: RecordProps) => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem(SEARCH_COOKIE) || "[]")
  );
  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  return (
    <div className="flex flex-col gap-6 mt-4 w-[93%]">
      <div className="flex flex-row border-b-2">
        <span className="block pl-2 pb-2 text-2xl tracking-tight font-bold border-b-gray-300 ">
          최근 검색어
        </span>
        <button type="button" className="pl-4" onClick={onClearKeywords}>
          전체 지우기 x
        </button>
      </div>
      {keywords.length === 0 ? (
        <div className="font-bold text-gray-700 pl-4">
          최근 검색어 내역이 없습니다.
        </div>
      ) : (
        <ul className="flex flex-col">
          {keywords.map((keyword: KeywordType, idx: number) => (
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