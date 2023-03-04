import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { MarketType } from "../../store/modules/market";
import { setResultAction } from "../../store/modules/result";
import FoodResult from "./FoodResult";
import RecordList, { RecordProps } from "./RecordList";

const FoodSearch = ({
  keywords,
  onClearKeywords,
  onRemoveKeyword,
}: RecordProps) => {
  const foodArray = useAppSelector((state) => state.market);
  const foodKeyword = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const searchedArray: MarketType[] = [];

  console.log("test");
  Object.values(foodArray).map((food) => {
    if (
      food.category === foodKeyword.keyword ||
      food.title === foodKeyword.keyword
    ) {
      searchedArray.push(food);
    }
  });
  useEffect(() => {
    dispatch(setResultAction(searchedArray));
  }, [searchedArray]);

  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen">
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
