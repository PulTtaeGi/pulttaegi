import { Result } from "postcss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hamberIco from "../../assets/icons/hamburger_icon.png";
import resultMapIco from "../../assets/icons/resultMap_ico.png";
const FoodResult = () => {
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    const tabBar: HTMLElement | null = document.getElementById("tabBar");
    const bottomheight = tabBar?.clientHeight;
    setHeight(bottomheight);
    console.log(height);
  }, [height]);

  const [searchResult, setSearchResult] = useState(false);

  const btn = (
    <button className="btn shadow-lg relative bottom-3">
      <Link to="/" className="flex items-center">
        <img
          src={searchResult ? hamberIco : resultMapIco}
          className="w-4 mr-2"
        ></img>
        <span>{searchResult ? "목록보기" : "지도보기"}</span>
      </Link>
    </button>
  );
  return (
    <div
      className="fixed bottom-0 flex z-10 felx justify-center items-center w-screen"
      style={{ bottom: `${height}` + "px" }}
    >
      {btn}
    </div>
  );
};

export default FoodResult;
