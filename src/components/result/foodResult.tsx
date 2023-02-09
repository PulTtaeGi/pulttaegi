import { useEffect, useState } from "react";
import hamberIco from "../../assets/icons/hamburger_icon.png";
const FoodResult = () => {
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    const tabBar: HTMLElement | null = document.getElementById("tabBar");
    const bottomheight = tabBar?.clientHeight;
    setHeight(bottomheight);
    console.log(height);
  }, [height]);

  const btn = (
    <button className="btn shadow-lg relative bottom-3">
      <img src={hamberIco} className="w-3 mr-2"></img>목록보기
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
