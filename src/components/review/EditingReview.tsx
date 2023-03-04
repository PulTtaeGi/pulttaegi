import Wrapper from "../../layouts/Wrapper";
import HashTagUpload from "./HashTagUpload";
import ImgUpload from "./ImgUpload";
import PostUpload from "./PostUpload";
import Rating from "./Rating";
import BreadCrumb from "../common/BreadCrumb";
import { firestore } from "../../api/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { editData } from "../../store/modules/review";
interface EditingReviewProps {
  title: string | undefined;
}

const EditingReview = ({ title }: EditingReviewProps): JSX.Element => {
  const currentId = localStorage.getItem("id");
  const [currentReview, setCurrentReview] = useState<reviewsProps>();
  const reviews = useAppSelector((state) => state.review);
  const [target, setTarget] = useState<reviewsProps>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  interface ratingProps {
    taste: number;
    sanitation: number;
    welbeing: number;
  }

  interface reviewsProps {
    content: string;
    hashtag: string[];
    img: any;
    rating: ratingProps;
    title: string;
    userid: string;
    id: number;
  }

  useEffect(() => {
    reviews.map((review) => {
      if (review.title === title && review.userid === currentId) {
        setTarget(review);
        return;
      }
    });
  }, [reviews]);

  useEffect(() => {
    setCurrentReview((prevState: any) => {
      return { ...prevState, userid: currentId, title: title };
    });
  }, []);

  useEffect(() => {
    setCurrentReview((prevState: any) => {
      return { ...prevState, id: target ? target.id : 0 };
    });
  }, [target]);

  const getUrl = (currentUrl: string) => {
    setCurrentReview((prevState: any) => {
      return { ...prevState, img: currentUrl };
    });
  };

  const getRating = (currentdata: string[]) => {
    if (currentdata[1] === "taste") {
      setCurrentReview((prevState: any) => {
        return {
          ...prevState,
          rating: { ...prevState.rating, taste: currentdata[0] },
        };
      });
    } else if (currentdata[1] === "welbeing") {
      setCurrentReview((prevState: any) => {
        return {
          ...prevState,
          rating: { ...prevState.rating, welbeing: currentdata[0] },
        };
      });
    } else if (currentdata[1] === "sanitation") {
      setCurrentReview((prevState: any) => {
        return {
          ...prevState,
          rating: { ...prevState.rating, sanitation: currentdata[0] },
        };
      });
    }
  };

  const getPost = (currentPost: string) => {
    setCurrentReview((prevState: any) => {
      return { ...prevState, content: currentPost };
    });
  };

  const getHashTag = (currentHashTag: string) => {
    setCurrentReview((prevState: any) => {
      return { ...prevState, hashtag: currentHashTag.split(" ") };
    });
  };

  const submitReview = () => {
    dispatch(editData(currentReview));
    const review = firestore.collection("review");
    const item =
      currentReview !== undefined ? review.doc(`${currentReview.id}`) : null;
    currentReview && item ? item.set(currentReview) : null;
    navigate("/review/total");
  };

  const backPage = () => {
    navigate("/review/total");
  };

  return (
    <>
      <Wrapper>
        <div className="flex flex-col w-full h-full mx-8 my-12">
          <BreadCrumb count="no">리뷰 수정하기</BreadCrumb>
          <div className="flex flex-col">
            <span className="mt-8 mb-3 font-bold text-xl text-green-4 tracking-tight">
              {title}
            </span>
            {/* <form method="post" encType="multipart/form-data"> */}
            <ImgUpload getUrl={getUrl} />
            <div className="flex flex-col w-full justify-start gap-4 mt-8 text-lg font-bold bg-gray-100 rounded-lg py-6">
              <Rating
                defaulted={
                  target !== undefined ? target.rating.welbeing : undefined
                }
                getRating={getRating}
                title="웰빙"
                color="green-2"
                category="welbeing"
              />
              <Rating
                defaulted={
                  target !== undefined ? target.rating.taste : undefined
                }
                getRating={getRating}
                title="맛"
                color="green-4"
                category="taste"
              />
              <Rating
                defaulted={
                  target !== undefined ? target.rating.sanitation : undefined
                }
                getRating={getRating}
                title="위생"
                color="green-3"
                category="sanitation"
              />
            </div>
            <PostUpload
              getPost={getPost}
              defaulted={target !== undefined ? target.content : undefined}
            />
            <HashTagUpload
              getHashTag={getHashTag}
              defaulted={target !== undefined ? target.hashtag : undefined}
            />
            <div className="flex flex-row justify-around mt-8">
              <button
                onClick={backPage}
                className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4"
              >
                취소
              </button>
              <button
                onClick={submitReview}
                className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4"
              >
                수정
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EditingReview;
