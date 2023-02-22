import { Link } from "react-router-dom";
import { MarketType } from "../../store/modules/market";

const FoodResult = ({ market }: { market: MarketType }) => {
  return (
    <li className="p-4 font-extrabold">
      <Link to="/" state={{ marketTitle: market }} className="flex flex-row">
        <img className="rounded-full w-[80px] h-[80px]" src={market.img} />
        <div className="flex flex-col ml-3">
          <span className="text-green-4 text-2xl">{market.title}</span>
          <span className="text-green-3 text-xl overflow-hidden">
            {market.address}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default FoodResult;
