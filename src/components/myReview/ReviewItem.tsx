import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HashTag from "../myReview/HashTag";
import { firestore } from "../../api/firebase";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/configureStore.hook";
import { deleteData } from "../../store/modules/review";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from "../../api/firebase";
import tw from "tailwind-styled-components";
import styled from "styled-components";

interface ReviewItemProps {
  title: string;
  content: string;
  hashtag: string[];
  userid: string;
  taste: number;
  sanitation: number;
}

interface ratingProps {
  taste: number;
  sanitation: number;
  welbeing: number;
}

interface reviewsProps {
  content: string;
  hashtag: string[];
  rating: ratingProps;
  title: string;
  userid: string;
  id: number;
}

export default function ReviewItem({
  title,
  content,
  hashtag,
  userid,
  taste,
  sanitation,
}: ReviewItemProps) {
  const [target, setTarget] = useState<reviewsProps>();
  const [imgUrl, setImgUrl] = useState<string>();

  const reviews = useAppSelector((state) => state.review);
  const dispatch = useAppDispatch();

  const currentId = localStorage.getItem("id");
  const storage = getStorage(app, "gs://pulttaegi-37599.appspot.com");
  const currentImgRef = ref(storage, `images/${title}/${userid}`);
  useEffect(() => {
    listAll(currentImgRef).then((response) => {
      getDownloadURL(response.items[0]).then((url) => {
        setImgUrl(url);
      });
    });
  }, []);

  useEffect(() => {
    reviews.map((review) => {
      if (review.title === title && review.userid === currentId) {
        setTarget(review);
        return;
      }
      const rate = review.rating;
      console.log(rate);

      return rate;
    });
  }, [reviews]);
  function deleteReview() {
    const reviewCollection = firestore.collection("review");
    target ? reviewCollection.doc(`${target.id}`).delete() : null;
    dispatch(deleteData(target));
  }
  const tastewidth = (taste * 10) / 2;
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div className="flex text-[23px] text-green-4 font-medium items-center">
          <div className="w-[200px] whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
          </div>
        </div>
        {currentId !== null && userid === currentId && (
          <div className="flex gap-3">
            <Link to={`/review/edit/${title}`}>
              <LinkItemWrap>수정</LinkItemWrap>
            </Link>
            <button onClick={deleteReview}>
              <LinkItemWrap>삭제</LinkItemWrap>
            </button>
          </div>
        )}
      </div>
      <div
        className="w-fullscreen overflow-hidden flex justify-center items-center"
        style={{ maxHeight: "520px" }}
      >
        <img src={imgUrl} className="w-fullscreen h-auto mt-4 " />v
      </div>
      <p className="mt-3 text-lg text-bold">{content}</p>
      {hashtag !== undefined && <HashTag list={hashtag}></HashTag>}
      <div className="bg-slate-100 py-5 px-5 mt-5 rounded-xl text-center ">
        <div className="flex justify-center items-center  ">
          <p style={{ width: "20%" }}>맛</p>
          <div style={{ width: "80%" }}>
            <div
              className="h-4 bg-green-4"
              style={{ width: `${taste * 20}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p style={{ width: "20%" }}>위생</p>
          <div style={{ width: "80%" }}>
            <div
              className="h-4 bg-green-3 "
              style={{ width: `${sanitation * 20}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LinkItem = styled.div`
  color: white;
`;

const LinkItemWrap = tw(LinkItem)`
    p-1 
    px-3
    bg-gray-400
    text-base
    tracking-tight
    rounded-xl
    text-center
    whitespace-nowrap
`;
