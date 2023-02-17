import EditingReview from "../components/review/EditingReview";
import WriteReview from "../components/review/WriteReview";
import { useParams } from "react-router";

const Review = () => {
  const params = useParams()
 
  return (
    <div className="">
      <WriteReview title={params.title} />
      {/* <EditingReview /> */}
    </div>
  );
};

export default Review;
