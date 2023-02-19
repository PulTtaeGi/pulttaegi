import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { MarketType } from "../../store/modules/market";
import FoodResult from "./FoodResult";
import SearchedList from "./SearchedList";

const FoodSearch = () => {
  const foodArray = useAppSelector((state) => state.market);
  const foodKeyword = useAppSelector((state) => state.search);
  let searchedArray: MarketType[] = [];

  Object.entries(foodArray).map((food, idx) => {
    searchedArray = [];
    console.log(food[idx]);
    if (
      food[idx].category === foodKeyword.keyword ||
      food[idx].title === foodKeyword.keyword
    ) {
      searchedArray.push(food[idx]);
      console.log(searchedArray);
    }
  });
  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen">
        <ul className="flex flex-col">
          {searchedArray &&
            searchedArray.map((food, i) => (
              <FoodResult key={i} market={food} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default FoodSearch;
