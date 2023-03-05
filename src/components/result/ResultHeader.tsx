import { useAppSelector } from "../../store/hooks/configureStore.hook";
import ResultBox from "../common/ResultBox";

const ResultHeader = () => {
  const useSearchKeyword = useAppSelector((state) => state.search);
  return <ResultBox text={useSearchKeyword.keyword} />;
};

export default ResultHeader;
