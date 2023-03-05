import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { MarketType } from "../../store/modules/market";
import ResultItem from "./ResultItem";

const ResultList = (): JSX.Element => {
  const searchKeyword = useAppSelector((state) => state.search);
  const searchResult = useAppSelector((state) => state.result);
  // if (!searchResult) return <></>;
  let listTemp: MarketType[] = [];
  listTemp = searchResult;
  useEffect(() => {
    console.log(searchKeyword);
  }, [searchKeyword]);

  return (
    <>
      {searchResult && (
        <ul className="mt-24">
          {listTemp.map((market, idx) => (
            <ResultItem market={market} key={idx} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ResultList;
