import Wrapper from "../../layouts/Wrapper";
import HashTagUpload from "./HashTagUpload";
import ImgUpload from "./ImgUpload";
import PostUpload from "./PostUpload";
import Rating from "./Rating";
import { firestore } from "../../data/firebase";
import { useEffect, useState } from "react";

interface writeReviewProps {
  title: string | undefined
}

const WriteReview = ({ title }: writeReviewProps ): JSX.Element => {
  const [reviews, setReviews] = useState<reviewsProps>()

  interface indexProps {
    taste : number,
    sanitation : number,
    welbeing : number,
  }

  interface reviewsProps {
    content : string,
    hashtag : string[],
    img : string,
    index : indexProps,
    title : string,
    userid : string,
  }

  useEffect(() => {
    const reviewList = firestore.collection("review")
        const totalData : any = [];
        reviewList.get().then((docs) => {
          docs.forEach((doc) => {
            if(doc.exists) {
                totalData.push(doc.data())
            }
            setReviews(totalData)
        })
        })
  }, [])

  const [currentReview, setCurrentReview] = useState<object>()

  const getUrl = (currentUrl : string) =>  {
    setCurrentReview((prevState : any) => {
      return {...prevState, img: currentUrl}
    })
  }

  console.log(currentReview)

  return (
    <Wrapper>
      <div className="flex flex-col w-full h-full mx-8 mt-12">
        <div className="font-bold text-2xl text-green-4 tracking-tight">
          리뷰 작성하기
        </div>
        <div className="flex flex-col mt-4 border-t-2">
          <span className="mt-8 mb-3 font-bold text-xl text-green-4 tracking-tight">
            {title}
          </span>
          <form method="post" encType="multipart/form-data">
            <ImgUpload getUrl={getUrl}/>
            <div className="flex flex-col w-full justify-start gap-4 mt-8 text-lg font-bold bg-gray-100 rounded-lg py-6">
              <Rating title="웰빙" />
              <Rating title="맛" />
              <Rating title="위생" />
            </div>
            <PostUpload />
            <HashTagUpload />
            <div className="flex flex-row justify-around mt-8">
              <button className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4">
                취소
              </button>
              <button className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4">
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default WriteReview;
