import { useState } from "react";
import { MarketType } from "../../typings/marketType";

const ResultItem = ({ market }: { market: MarketType }) => {
  const [star, setStar] = useState(false);

  const onClickStar = () => {
    setStar(!star);
  };
  return (
    <li className="p-4 font-extrabold flex items-center">
      <img className="rounded-full w-[80px] h-[80px]" src={market.img} />
      <div className="flex flex-col ml-3">
        <span className="text-green-4 text-2xl">{market.title}</span>
        <span className="text-green-3 text-xl overflow-hidden h-14">
          {market.address}
        </span>
      </div>
      {star ? (
        <img
          className="rounded-full w-[30px] h-[30px]"
          src={"src/assets/icons/starActive.png"}
          onClick={onClickStar}
        />
      ) : (
        <img
          className="rounded-full w-[30px] h-[30px]"
          src={"src/assets/icons/star.png"}
          onClick={onClickStar}
        />
      )}
    </li>
  );
};

export default ResultItem;
