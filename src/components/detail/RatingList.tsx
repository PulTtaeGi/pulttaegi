import { RatingProps } from "../../pages/Detail";
import Rating from "./Rating";

const RatingList = ({ ratingList }: { ratingList: RatingProps }) => {
  const TITLE_LIST = ["위생", "맛", "웰빙"];
  return (
    <div className="flex flex-col w-[320px] justify-start gap-4 mt-12 mb-12 text-xl font-bold">
      {Object.entries(ratingList).map((rating, idx) => (
        <Rating key={idx} title={TITLE_LIST[idx]} number={rating[1]} />
      ))}
    </div>
  );
};

export default RatingList;
