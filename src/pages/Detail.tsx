import HashTagBar from "../components/common/HashTagBar";
import ReviewWrite from "../components/detail/ReviewWrite";
import ReviewList from "../components/detail/ReviewList";
import MenuList from "../components/detail/MenuList";
import MarketDes from "../components/detail/MarketDes";
import RatingList from "../components/detail/RatingList";
import ResultBox from "../components/common/ResultBox";
import { MarketType } from "../store/modules/market";
import { useAppSelector } from "../store/hooks/configureStore.hook";
import { useParams } from "react-router";
import { useEffect, useState } from "react"

export interface RatingProps {
  taste: number;
  clean: number;
  calorie: number;
}

export interface targetReviewsType {
    title : string,
    content: string,
    userid: string,
    hashtag: string[],
  }

export default function Detail() {

    //URL 내 파라미터값 가져오기
    const param = useParams();

    //마켓 데이터 관련 변수
    const markets = useAppSelector((state) => state.market);
    const [market, setMarket] = useState<MarketType>()

    //리뷰 데이터 관련 변수
    const reviews = useAppSelector((state) => state.review)
    const [targetReviews, setTargetReviews] = useState<Array<targetReviewsType>>()
    const target = reviews.filter((review) => review.title === param.title)
  
    useEffect(() => {
        setTargetReviews(target)
    }, [reviews])

    useEffect(() => {
        setMarket(markets[0])
    }, [markets])

    const ratingList: RatingProps = {
        taste: market ? market.taste : 0,
        clean: market ? market.clean : 0,
        calorie: market ?  market.calorie : 0,
    };

  return (
    <div className="flex items-center justify-center h-full">
      <ResultBox text="맛집 상세보기" />
      <div className="flex flex-col items-center w-full h-full mx-8 mt-24">
        { market && 
            <MarketDes market={market} />
        }
        {targetReviews && 
            <>
                <HashTagBar reviewList={targetReviews} />
                {/* <RatingList reviewList={targetReviews} /> */}
            </>
        }
                        <RatingList ratingList={ratingList} />
        <MenuList />
        { targetReviews && 
            <ReviewList reviewList={targetReviews}/>
        }
        {param.title && 
          <ReviewWrite title={param.title} />
        }
      </div>
    </div>
  );
}