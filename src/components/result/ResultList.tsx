import { useAppSelector } from "../../state/store/hooks/configureStore.hook";
import ResultItem from "./ResultItem";

const ResultList = () => {
  const marketList = useAppSelector((state) => state.market);
  const listTemp = Object.entries(marketList);
  if (marketList.length === 0) return;
  console.log(Object.entries(marketList));

  return (
    <ul className="mt-24">
      {listTemp.map((market, idx) => (
        <ResultItem market={market[1]} key={idx} />
      ))}
    </ul>
  );
};

export default ResultList;
