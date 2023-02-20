import HashTagBar from "../components/common/HashTagBar";
import ReviewWrite from "../components/detail/reviewWrite";
import ReviewList from "../components/detail/ReviewList";
import MenuList from "../components/detail/MenuList";
import MarketDes from "../components/detail/MarketDes";
import RatingList from "../components/detail/RatingList";
import ResultBox from "../components/common/ResultBox";
import { useAppSelector } from "../store/hooks/configureStore.hook";
import { useParams } from "react-router";

export interface RatingProps {
  taste: number;
  clean: number;
  calorie: number;
}

export default function Detail() {
  const param = useParams();
  console.log(param.title);
  const markets = useAppSelector((state) => state.market);
  console.log(markets);
  const ratingList: RatingProps = {
    taste: markets[1].taste,
    clean: markets[1].clean,
    calorie: markets[1].calorie,
  };

  const hashTagList: string[] = [
    "샐러드맛집",
    "샌드위치맛집",
    "다이어트식",
    "다이어트",
  ];

  return (
    <div className="flex items-center justify-center h-full">
      <ResultBox text="맛집 상세보기" />
      <div className="flex flex-col items-center w-full h-full mx-8 mt-24">
        <MarketDes market={markets[1]} />
        <HashTagBar list={hashTagList}></HashTagBar>
        <RatingList ratingList={ratingList} />
        <MenuList />
        <ReviewList />
        <ReviewWrite />
      </div>
    </div>
  );
}
