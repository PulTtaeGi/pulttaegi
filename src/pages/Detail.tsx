import HashTagBar from "../components/common/HashTagBar";
import ReviewWrite from "../components/detail/ReviewWrite";
import ReviewList from "../components/detail/ReviewList";
import MenuList from "../components/detail/MenuList";
import MarketDes from "../components/detail/MarketDes";
import RatingList from "../components/detail/RatingList";
import ResultBox from "../components/common/ResultBox";
import { MarketType, MenuType } from "../store/modules/market";
import { useAppSelector } from "../store/hooks/configureStore.hook";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useCallback, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../api/firebase";
import { useNavigate } from "react-router";

export interface RatingProps {
  taste: number;
  clean: number;
  calorie: number;
}

export interface targetReviewsType {
  title: string;
  content: string;
  userid: string;
  hashtag: string[];
}

// export interface MenuProps{

// }

// const handleSignUp = useCallback(async () => {
//   const favoriteRef = collection(firestore, "favorites");
//   const navigate = useNavigate();
//   try {
//     await addDoc(favoriteRef, {
//       // favoriteRef.current?.value,
//     }).then(() => {
//       alert("즐겨찾기 등록에 성공했어요");
//       navigate("/total");
//     });
//   } catch (e) {
//     alert("즐겨찾기에 등록 실패했어요");
//     console.error(e);
//   }
// }, []);

export default function Detail() {
  //URL 내 파라미터값 가져오기
  const param = useParams();

  //마켓 데이터 관련 변수
  const markets = useAppSelector((state) => state.market);
  const [market, setMarket] = useState<MarketType>();
  const [rating, setRating] = useState<RatingProps>();
  const [menus, setMenus] = useState<MenuType[]>();

  //리뷰 데이터 관련 변수
  const reviews = useAppSelector((state) => state.review);
  const [targetReviews, setTargetReviews] =
    useState<Array<targetReviewsType>>();
  const target = reviews.filter((review) => review.title === param.title);

  useEffect(() => {
    setTargetReviews(target);
  }, [reviews]);

  useEffect(() => {
    Object.values(markets).filter((market) => {
      if (market.title === param.title) {
        setMarket(market);
        setRating({
          clean: market.clean,
          taste: market.taste,
          calorie: (market.calorie % 5) + 1,
        });
        setMenus(market.menu);
      }
    });
  }, [markets]);

  return (
    <div className="flex items-center justify-center h-full">
      <ResultBox text="맛집 상세보기" />
      <div className="flex flex-col items-center w-full h-full mx-8 mt-24">
        {market && <MarketDes market={market} />}
        {targetReviews && (
          <>
            <HashTagBar reviewList={targetReviews} />
          </>
        )}
        {rating && <RatingList ratingList={rating} />}
        {menus && <MenuList menuList={menus} />}
        {targetReviews && <ReviewList reviewList={targetReviews} />}
        {param.title && <ReviewWrite title={param.title} />}
      </div>
    </div>
  );
}
