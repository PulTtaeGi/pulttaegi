import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setDataAction } from "../../store/modules/search";

interface SearchProps {
  placehoderText: string;
  onAddKeyword: (text: string) => void;
}
const SearchInput = ({ placehoderText, onAddKeyword }: SearchProps) => {
  const [keyword, setKeyword] = useState("");
  const [tmpKeyword, setTmpKeyword] = useState(keyword);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setKeyword(tmpKeyword);
    }, 300);
    return () => clearTimeout(debounce);
  }, [tmpKeyword]);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpKeyword(e.target.value);
    console.log(keyword);
  };
  const onClickSearch = () => {
    console.log(keyword);
    if (keyword === "") return;
    onAddKeyword(keyword);
    dispatch(setDataAction({ keyword }));
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

  return (
    <div className="fixed top-0 left-0 ml-4 flex justify-between w-[90%] mt-32 p-3 bg-gray-100 rounded-3xl">
      <input
        type="text"
        value={tmpKeyword}
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
