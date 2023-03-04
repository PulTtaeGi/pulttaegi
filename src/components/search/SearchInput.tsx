import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { MarketType } from "../../store/modules/market";
import { setResultAction } from "../../store/modules/result";
import { setDataAction } from "../../store/modules/search";
import { SEARCH_COOKIE } from "./RecordList";

interface SearchProps {
  placehoderText: string;
  onAddKeyword: (text: string) => void;
}
const SearchInput = ({ placehoderText, onAddKeyword }: SearchProps) => {
  const [keyword, setKeyword] = useState("");

  const useDispatcher = useAppDispatch();

  useEffect(() => {
    console.log(keyword);
    setKeyword("");
    useDispatcher(setDataAction({ keyword: "" }));
  }, []);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const onClickSearch = () => {
    console.log(keyword);
    if (keyword === "") return;
    onAddKeyword(keyword);
    useDispatcher(setDataAction({ keyword }));
    setKeyword("");
  };
  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // @deprecated
    if (keyword && e.keyCode === 13) {
      e.preventDefault();
      onAddKeyword(keyword);
      console.log("keyword" + keyword);
      // setKeyword("");
    }
  };
  // const hasKeyword = !!keyword;

  return (
    <div className="fixed top-0 left-0 ml-4 flex justify-between w-[90%] mt-32 p-3 bg-gray-100 rounded-3xl">
      <input
        type="text"
        value={keyword}
        placeholder={placehoderText}
        className="bg-gray-100 ml-3 text-[17px] text-black placeholder-gray-600 font-bold outline-0"
        onChange={handleKeyword}
      ></input>
      <button type="submit" onClick={onClickSearch} onKeyDown={onKeyDownSearch}>
        <img
          src="../../src/assets/icons/search_icon.png"
          alt="serachButton"
          className="w-[25px] h-[25px]"
        ></img>
      </button>
    </div>
  );
};

export default SearchInput;
