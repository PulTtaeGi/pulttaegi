import { Link } from "react-router-dom";
import searchMap from "../search/SearchMap";

interface props {
  address: string;
  place: string;
}

const SearchedList = ({ address, place }: props) => {
  // const addressSearch = () => {
  //   setTimeout(() => {
  //     searchMap();
  //   }, 200);
  // };
  return (
    <li className="flex justify-between p-4 font-extrabold flex-col">
      <Link
        // onClick={addressSearch}
        to="/"
        className="flex flex-col"
        state={{ marketAddress: address }}
      >
        <span className="text-green-4 text-2xl">{place}</span>
        <span className="text-green-3 text-xl">{address}</span>
      </Link>
    </li>
  );
};

export default SearchedList;
