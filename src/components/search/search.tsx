import { Link, BrowserRouter } from "react-router-dom";
import SearchIcon from "../../assets/icons/search_icon.png";
import backIcon from "../../assets/icons/back.png";
import { useState } from "react";
import SearchResultBtn from "../common/SearchResultBtn";
import { Category } from "../category/Category";
const Search = () => {
  // 검색 전, 후 보여줄 내용을 search라는 state 값 활용(true, false)
  const [search, setSearch] = useState<boolean>(false);
  const setTrue = () => {
    setSearch(false);
  };
  const setFalse = () => {
    setSearch(true);
  };

  const searchBar = (
    <Link
      to="/"
      className="fixed z-10 bg-slate-50 top-5 w-5/6 rounded-xl border-stone-300 border-2 shadow-2xl"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        padding: "15px 15px",
      }}
    >
      <div
        onClick={setFalse}
        className="flex-auto flex bg-slate-50 items-center  justify-between text-gray-500 font-bold text-xl"
      >
        <span>지역이나 음식을 검색해보세요</span>
        <img src={SearchIcon} className="w-10"></img>
      </div>
    </Link>
  );
  const resultBar = (
    <div className="fixed z-10 bg-slate-50 top-0 w-screen h-20 flex items-center border-stone-300 border-2 shadow-2xl font-bold text-2xl">
      <button onClick={setTrue}>
        <img className="w-8 my-auto m-5" src={backIcon}></img>
      </button>
      <span>강남역</span>
    </div>
  );

  return (
    <>
      {search ? resultBar : searchBar}
      {search && <SearchResultBtn />}
      {!search && <Category />}
    </>
  );
};

export default Search;
