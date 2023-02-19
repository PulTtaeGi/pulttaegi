import Wrapper from "../../layouts/Wrapper";
import HashTagUpload from "./HashTagUpload";
import ImgUpload from "./ImgUpload";
import PostUpload from "./PostUpload";
import Rating from "./Rating";
import BreadCrumb from "../common/BreadCrumb";
import { firestore } from "../../api/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface writeReviewProps {
  title: string | undefined
}

const WriteReview = ({ title }: writeReviewProps ): JSX.Element => {
  const [reviews, setReviews] = useState<reviewsProps>()
  const navigate = useNavigate()

  interface ratingProps {
    taste : number,
    sanitation : number,
    welbeing : number,
  }

  interface reviewsProps {
    content : string,
    hashtag : string[],
    img : any,
    rating : ratingProps,
    title : string,
    userid : string,
  }

  useEffect(() => {
    setCurrentReview((prevState : any) => {
      return {...prevState, userid: "admin", title: title}
    })
  }, [])

  const [currentReview, setCurrentReview] = useState<object>()

  const getUrl = (currentUrl : string) =>  {
    setCurrentReview((prevState : any) => {
      return {...prevState, img: currentUrl}
    })
  }

  const getRating = (currentdata : string[]) => {
    if (currentdata[1] === "taste") {
      setCurrentReview((prevState : any) => {
        return {...prevState, rating: {...prevState.rating, taste: currentdata[0]}}
      })
    } else if (currentdata[1] === "welbeing") {
      setCurrentReview((prevState : any) => {
        return {...prevState, rating: {...prevState.rating, welbeing: currentdata[0]}}
      })
    } else if (currentdata[1] === "sanitation") {
      setCurrentReview((prevState : any) => {
        return {...prevState, rating: {...prevState.rating, sanitation: currentdata[0]}}
      })
    }
  }

  const getPost = (currentPost : string) => {
    setCurrentReview((prevState : any) => {
      return {...prevState, content: currentPost}
    })
  }

  const getHashTag = (currentHashTag : string) => {
    setCurrentReview((prevState : any) => {
      return {...prevState, hashtag: currentHashTag.split(" ")}
    })
  }

  // console.log(currentReview)

  const submitReview = () => {
    const reviews = firestore.collection("review")
    currentReview ? reviews.add(currentReview) : null

    navigate("/detail")
  }

  const backPage = () => {
    navigate("/detail")
  }

  return (
    <Wrapper>
      <div className="flex flex-col w-full h-full mx-8 mt-12">
        <BreadCrumb count="no">리뷰 작성하기</BreadCrumb>
        <div className="flex flex-col">
          <span className="mt-8 mb-3 font-bold text-xl text-green-4 tracking-tight">
            {title}
          </span>
          {/* <form method="post" encType="multipart/form-data"> */}
            <ImgUpload getUrl={getUrl}/>
            <div className="flex flex-col w-full justify-start gap-4 mt-8 text-lg font-bold bg-gray-100 rounded-lg py-6">
              <Rating 
                getRating={getRating} 
                title="웰빙" 
                color="green-2" 
                category="welbeing"
              />
              <Rating 
                getRating={getRating} 
                title="맛" 
                color="green-4" 
                category="taste"
              />
              <Rating 
                getRating={getRating} 
                title="위생" 
                color="green-3" 
                category="sanitation"
              />
            </div>
            <PostUpload getPost={getPost}/>
            <HashTagUpload getHashTag={getHashTag}/>
            <div className="flex flex-row justify-around mt-8">
              <button onClick={backPage} className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4">
                취소
              </button>
              <button onClick={submitReview} className="btn w-20 bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4">
                등록
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default WriteReview;

