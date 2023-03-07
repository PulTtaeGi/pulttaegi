import { useState, useEffect } from "react";
import { targetReviewsType } from "../../pages/Detail";
import Rating from "./Rating";

interface RatingListProps {
  reviewList: Array<targetReviewsType>;
}

const RatingList = ({ reviewList }: RatingListProps) => {
  const TITLE_LIST = ["웰빙", "맛", "위생"];
  const COLOR_VARIABLE = [3, 2, 4];
  const [rating, setRating] = useState<number[]>();

  useEffect(() => {
    let taste = 0;
    let welbeing = 0;
    let sanitation = 0;

    reviewList.forEach((review) => {
      taste += Number(review.rating.taste);
      welbeing += Number(review.rating.welbeing);
      sanitation += Number(review.rating.sanitation);
    });

    taste /= reviewList.length;
    welbeing /= reviewList.length;
    sanitation /= reviewList.length;

    setRating([welbeing, taste, sanitation]);
  }, [reviewList]);

  console.log(rating);

  return (
    <div className="flex flex-col w-full mt-6 mb-12">
      <div className="text-xl font-bold">방문객들이 남긴 총 평점</div>
      <div className="flex flex-col w-[320px] gap-4 mt-6 mx-auto text-xl font-bold">
        {rating &&
          rating.map((item, idx) => (
            <Rating
              key={idx}
              title={TITLE_LIST[idx]}
              number={item}
              color={COLOR_VARIABLE[idx]}
            />
          ))}
      </div>
    </div>
  );
};

export default RatingList;
