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
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/configureStore.hook";
import { addData } from "../../store/modules/review";
import tw from "tailwind-styled-components";
import styled from "styled-components";

interface writeReviewProps {
  title: string | undefined;
}

const WriteReview = ({ title }: writeReviewProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.review);
  const currentId = localStorage.getItem("id");
  const [currentReview, setCurrentReview] = useState<object>();

  useEffect(() => {
    setCurrentReview((prevState: any) => {
      return {
        ...prevState,
        userid: currentId,
        title: title,
        id: reviews.length + 1,
      };
    });
  }, []);

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
    dispatch(addData(currentReview));
    const reviewCollection = firestore.collection("review");
    const length = reviews.length + 1;
    currentReview ? reviewCollection.doc(`${length}`).set(currentReview) : null;
    navigate(`/review/total`);
  };

  const backPage = () => {
    navigate(`/detail/${title}`);
  };

  return (
    <Wrapper>
      <div className="flex flex-col w-full h-full mx-8 mt-12 mb-32">
        <BreadCrumb count="no">리뷰 작성하기</BreadCrumb>
        <div className="flex flex-col">
          <span className="mt-8 mb-3 font-bold text-2xl text-green-4">
            {title}
          </span>
          {/* <form method="post" encType="multipart/form-data"> */}
          <ImgUpload getUrl={getUrl} title={title} prevUrl="" />
          <div className="flex flex-col w-full justify-start gap-4 mt-8 text-lg bg-gray-100 rounded-lg py-6">
            <Rating
              defaulted={undefined}
              getRating={getRating}
              title="웰빙"
              color="green-2"
              category="welbeing"
            />
            <Rating
              defaulted={undefined}
              getRating={getRating}
              title="맛"
              color="green-4"
              category="taste"
            />
            <Rating
              defaulted={undefined}
              getRating={getRating}
              title="위생"
              color="green-3"
              category="sanitation"
            />
          </div>
          <PostUpload getPost={getPost} defaulted={undefined} />
          <HashTagUpload getHashTag={getHashTag} defaulted={undefined} />
          <div className="flex flex-row justify-around mt-8">
            <button onClick={backPage}>
              <Button>취소</Button>
            </button>
            <button onClick={submitReview}>
              <Button>등록</Button>
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </Wrapper>
  );
};

const ButtonItem = styled.div`
  font-size: 16px;
  font-bold: 500;
`;

const Button = tw(ButtonItem)`
  btn
  w-20
  bg-green-3
  border-green-3
  hover:bg-green-4
  hover:border-green-4
`;

export default WriteReview;
