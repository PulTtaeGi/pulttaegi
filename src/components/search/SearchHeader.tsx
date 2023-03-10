import { useEffect, useState } from "react";
import { SearchType } from "../../constants/searchConstant";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { setDataAction } from "../../store/modules/search";
import styles from "../../styles/ActiveClass.module.css";
import SearchBar from "./SearchBar";

const SearchHeader = (): JSX.Element => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);
  console.log(kakaomaps);
  const [isRegion, setIsRegion] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataAction({ keyword: "" }));
  }, []);

  function handleCategory(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.value === SearchType.region
      ? setIsRegion(true)
      : setIsRegion(false);
    dispatch(setDataAction({ keyword: "" }));
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
          {SearchType.region}
        </button>
        <button
          onClick={handleCategory}
          value="음식 검색"
          className={`text-gray-400 text-2xl tracking-tighter font-semibold ${
            isRegion ? "" : styles.active
          }`}
        >
          {SearchType.food}
        </button>
      </div>
      <SearchBar isRegion={isRegion} />
    </>
  );
};

export default SearchHeader;
