import { useState } from "react";
import { MarketType } from "../../typings/marketType";
import FavoriteButton from "../common/FavoriteButton";

const MarketDes = ({ market }: { market: MarketType }) => {
  const [like, setLike] = useState<boolean>(false);

  function handleLike() {
    like === false ? setLike(true) : setLike(false);
  }
  return (
    <>
      <div className="flex items-center w-full items-centern justify-between mb-2">
        <span className="text-2xl font-bold text-green-4 whitespace-nowrap">
          {market.title}
        </span>
        {/* <button type="button" onClick={handleLike}>
          <img
            src={`../../src/assets/icons/${like ? "starActive" : "star"}.png`}
            alt="backButton"
            className="w-[28px] h-[28px]"
          ></img>
        </button> */}
        <FavoriteButton market={market} />
      </div>
      <div>
        <img src={market.img} alt={market.title} className="rounded-xl"></img>
      </div>
      <div className="flex flex-col justify-end w-full mt-2">
        <p className="text-lg tracking-tight font-bold mb-1">
          {market.address}
        </p>
      </div>
    </>
  );
};
export default MarketDes;
