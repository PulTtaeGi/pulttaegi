import { useState } from "react";

import styles from "../../styles/ActiveClass.module.css";

const SearchHeader = (): JSX.Element => {
  const [isRegion, setIsRegion] = useState<boolean>(true);

  function handleCategory(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.value === "지역 검색" ? setIsRegion(true) : null;

    e.currentTarget.value === "음식 검색" ? setIsRegion(false) : null;
  }
  return (
    <>
      <div className="flex items-center w-full justify-start">
        <img
          src="../../src/assets/images/back.png"
          alt="backButton"
          className="w-[22px] h-[22px]"
        ></img>
      </div>
      <div className="flex gap-6 justify-start w-full mt-8">
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
    </>
  );
};

export default SearchHeader;
