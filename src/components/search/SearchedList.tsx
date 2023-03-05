import { Link } from "react-router-dom";

interface props {
  address: string;
  place: string;
}

const SearchedList = ({ address, place }: props) => {
  return (
    <li className="flex justify-between p-4 font-extrabold flex-col">
      <Link to="/" className="flex flex-col" state={{ marketAddress: address }}>
        <span className="text-green-4 text-2xl">{place}</span>
        <span className="text-green-3 text-xl">{address}</span>
      </Link>
    </li>
  );
};

export default SearchedList;
