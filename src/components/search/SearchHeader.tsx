import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { setData } from "../../store/modules/search";
import styles from "../../styles/ActiveClass.module.css";
import SearchBar from "./SearchBar";

const SearchHeader = (): JSX.Element => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);
  console.log(kakaomaps);
  const [isRegion, setIsRegion] = useState<boolean>(true);
  const useDispatcher = useAppDispatch();

  function handleCategory(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.value === "지역 검색"
      ? setIsRegion(true)
      : setIsRegion(false);
    useDispatcher(setData({ keyword: "" }));
  }
  return (
    <>
      <div className=" bg-white h-[50px] z-10 flex gap-6 justify-start w-screen mt-20 pl-8 fixed top-0 ">
        <button
          onClick={handleCategory}
          value="지역 검색"
          className={`text-gray-400 text-2xl tracking-tighter font-semibold ${
            isRegion ? styles.active : ""
          }`}
        >
          지역 검색
        </button>
        <button
          onClick={handleCategory}
          value="음식 검색"
          className={`text-gray-400 text-2xl tracking-tighter font-semibold ${
            isRegion ? "" : styles.active
          }`}
        >
          음식 검색
        </button>
      </div>
      <SearchBar isRegion={isRegion} />
    </>
  );
};

export default SearchHeader;
