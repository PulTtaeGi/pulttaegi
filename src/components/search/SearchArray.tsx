const SearchArray = (searchedArray: any) => {
  const searchArr = Object.keys(searchedArray).map(
    (item) => searchedArray[item]
  );
  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen fixed bottom-5 z-30 bg-slate-500    ">
        <ul className="flex flex-col ">
          {searchArr.map((item, i) => (
            <li title={item.title} key={i}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchArray;
