import React, { useEffect, useState } from "react";
import eggimage from "../../assets/icons/pngegg.png"
import { Link } from "react-router-dom";
import HashTag from "../myReview/HashTag"
import { firestore } from "../../api/firebase";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { deleteData } from "../../store/modules/review";

interface ReviewItemProps {
    title: string,
    img: any,
    content: string,
    hashtag: string[],
    userid: string,
}

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
    id: number,
  }

export default function ReviewItem ({title, img, content, hashtag, userid} : ReviewItemProps) {
    const users = useAppSelector((state) => state.signup)
    const reviews = useAppSelector((state) => state.review)

    const currentId = localStorage.getItem("id")
    const [target, setTarget] = useState<reviewsProps>()
    const dispatch = useAppDispatch()

    console.log(userid)
    console.log(currentId)

    useEffect(() => {
        reviews.map((review) => {
          if(review.title === title && review.userid === currentId) {
            setTarget(review)
            return
          }
        })
      }, [reviews])

    function deleteReview () {
        const reviewCollection = firestore.collection("review")
        console.log(target)
        target ? reviewCollection.doc(`${target.id}`).delete() : null
        
        dispatch(deleteData(target))

    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <div className="flex text-[23px] text-green-4 font-bold items-center ">
                    <div className={"w-[200px] tracking-tight whitespace-nowrap text-ellipsis overflow-hidden"}>
                        {title}
                    </div>
                    <img src={eggimage} width="20"/>
                </div>
                { currentId !== null && 
                    userid === currentId &&
                    <div className="flex gap-3">
                        <Link 
                            to={`/review/edit/${title}`}
                            className={`p-1 px-3 text-white bg-gray-400 text-base font-bold tracking-tight rounded-xl text-center whitespace-nowrap`}
                        >
                            수정
                        </Link> 
                        <button 
                            onClick={deleteReview}
                            className={`p-1 px-3 text-white bg-gray-400 text-base font-bold tracking-tight rounded-xl text-center whitespace-nowrap`}
                        >
                            삭제
                        </button>
                    </div>
                }
            </div>
            <img src={img} className="w-[350px] h-[260px] mt-4 "/>
            <p className="mt-3 text-lg text-bold">{content}</p>
            {
                hashtag !== undefined &&
                    <HashTag list={hashtag}></HashTag>
            }
        </div>
    )
}