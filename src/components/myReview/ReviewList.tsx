import ReviewItem from "./ReviewItem";

interface ReviewListProps {
  list: any[];
}

function ReviewList({ list }: ReviewListProps) {
  return (
    <>
      <div className="text-black bg-white flex flex-col w-full gap-14 items-center mt-8">
        {list !== undefined &&
          list.map((review, index) => {
            return (
              <ReviewItem
                key={index}
                title={review.title}
                content={review.content}
                hashtag={review.hashtag}
                userid={review.userid}
              />
            );
          })}
      </div>
    </>
  );
}

export default ReviewList;
