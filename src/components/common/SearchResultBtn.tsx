import { Result } from "postcss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamberIco from "../../assets/icons/hamburger_icon.png";
import resultMapIco from "../../assets/icons/map_ico.png";
import search from "../../store/modules/search";

const SearchResultBtn = () => {
  // 마켓타이틀, 마켓어드레스 이용하여 조건부 렌더링
  const location = useLocation();
  const marketTitle = location.state?.marketTitle;
  const marketAddress = location.state?.marketAddress;
  const [height, setHeight] = useState<number>();
  const [searchResult, setSearchResult] = useState(false);
  const [searchRF, setSearchRF] = useState(false);

  useEffect(() => {
    const tabBar: HTMLElement | null = document.getElementById("tabBar");
    const bottomheight = tabBar?.clientHeight;
    setHeight(bottomheight);
    if (marketTitle == undefined) {
      setSearchResult(false);
    } else setSearchResult(true);
  }, [height, marketTitle]);

  const btn = (
    <button className="btn shadow-lg relative bottom-3">
      <Link to="/searchResult" className="flex items-center">
        <img src={hamberIco} className="w-4 mr-2"></img>
        <span>{"목록보기"}</span>
      </Link>
    </button>
  );

  return (
    <>
      {searchResult && (
        <div
          className="fixed bottom-0 flex z-10 felx justify-center items-center w-screen"
          style={{ bottom: `${height}` + "px" }}
        >
          {btn}
        </div>
      )}
    </>
  );
};

export default SearchResultBtn;
