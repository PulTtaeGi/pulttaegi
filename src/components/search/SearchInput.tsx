import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../store/modules/search";

const SearchInput = ({ placehoderText }: { placehoderText: string }) => {
  const [keyword, setKeyword] = useState("");

  const useDispatcher = useDispatch();
  const search = () => {
    console.log(keyword);
    useDispatcher(setData({ keyword }));
  };

  return (
    <div className="fixed top-0 left-0 ml-4 flex justify-between w-[90%] mt-32 p-3 bg-gray-100 rounded-3xl">
      <input
        type="text"
        placeholder={placehoderText}
        className="bg-gray-100 ml-3 text-[17px] text-black placeholder-gray-600 font-bold outline-0"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button type="submit" onClick={search}>
        <img
          src="../../src/assets/images/search.png"
          alt="serachButton"
          className="w-[25px] h-[25px]"
        ></img>
      </button>
    </div>
  );
};

export default SearchInput;
