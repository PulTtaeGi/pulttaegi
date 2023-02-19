import { Link } from "react-router-dom";
import { MarketType } from "../../store/modules/market";

const FoodResult = ({ market }: { market: MarketType }) => {
  console.log(market);
  return (
    <li className="p-4 font-extrabold">
      <Link to="/result" className="flex flex-row">
        <img className="rounded-full" src={market.img} width="80" />
        <div className="flex flex-col ml-3">
          <span className="text-green-4 text-2xl">{market.title}</span>
          <span className="text-green-3 text-xl">{market.address}</span>
        </div>
      </Link>
    </li>
    // <div>
    //   <div className="flex flex-col gap-4">
    //     <div className="flex justify-between w-80 items-center	">
    //       <div className="flex items-center	gap-4">
    //         <img className="rounded-full" src={market.img} width="80" />
    //         <div>
    //           {market.title}
    //           {/* <div>{market.menus[0].menuName}</div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FoodResult;
