import ReviewItem from "./ReviewItem";

interface ReviewListProps {
  list: any[];
}

function ReviewList({ list }: ReviewListProps) {
  const copyList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    copyList.push(list[i]);
  }

  return (
    <>
      <div className="text-black bg-white flex flex-col w-full gap-14 items-center mt-8">
        {copyList !== undefined &&
          copyList.map((review, index) => {
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
