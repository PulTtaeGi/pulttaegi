const SearchBar = (): JSX.Element => {
  return (
    <div className="flex justify-between w-full mt-4 p-3 bg-gray-100 rounded-3xl">
      <input
        type="text"
        placeholder="음식명을 입력해주세요"
        className="bg-gray-100 ml-3 text-[17px] text-black placeholder-gray-600 font-bold outline-0"
      ></input>
      <button type="submit">
        <img
          src="../../src/assets/images/search.png"
          alt="serachButton"
          className="w-[25px] h-[25px]"
        ></img>
      </button>
    </div>
  );
};

export default SearchBar;
