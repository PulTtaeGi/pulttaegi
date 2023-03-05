import WriteReview from "../components/review/WriteReview";
import { useParams } from "react-router";


const Review = () => {
  const params = useParams()

  return (
      <WriteReview title={params.title} />
  );
};

export default Review;
