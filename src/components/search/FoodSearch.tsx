import { useEffect } from "react";
import { RecordProps } from "../../constants/typings/searchType";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { MarketType } from "../../typings/marketType";
import { setResultAction } from "../../store/modules/result";
import FoodResult from "./FoodResult";
import RecordList from "./RecordList";

const FoodSearch = ({
  keywords,
  onClearKeywords,
  onRemoveKeyword,
}: RecordProps): JSX.Element => {
  const foodArray = useAppSelector((state) => state.market);
  const foodKeyword = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  let searchedArray: MarketType[] = [];

  searchedArray = Object.values(foodArray).filter(
    (food) =>
      foodKeyword.keyword !== "" &&
      (food.category.includes(foodKeyword.keyword) ||
        food.title.includes(foodKeyword.keyword))
  );
  useEffect(() => {
    dispatch(setResultAction(searchedArray));
  }, [searchedArray]);

  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen mb-28">
        <ul className="flex flex-col ">
          {searchedArray.length > 0 ? (
            searchedArray.map((food, i) => <FoodResult key={i} market={food} />)
          ) : (
            <RecordList
              keywords={keywords}
              onClearKeywords={onClearKeywords}
              onRemoveKeyword={onRemoveKeyword}
            />
          )}
        </ul>
      </div>
    </>
  );
};

export default FoodSearch;
