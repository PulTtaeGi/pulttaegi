import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HashTag from "../myReview/HashTag"
import { firestore } from "../../api/firebase";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { deleteData } from "../../store/modules/review";
import tw from "tailwind-styled-components";
import styled from "styled-components";

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
    const reviews = useAppSelector((state) => state.review)
    const currentId = localStorage.getItem("id")
    const [target, setTarget] = useState<reviewsProps>()
    const dispatch = useAppDispatch()

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
        target ? reviewCollection.doc(`${target.id}`).delete() : null
        
        dispatch(deleteData(target))
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <div className="flex text-[23px] text-green-4 font-medium items-center">
                    <div className="w-[200px] whitespace-nowrap text-ellipsis overflow-hidden">
                        {title}
                    </div>
                </div>
                { currentId !== null && 
                    userid === currentId &&
                    <div className="flex gap-3">
                        <Link to={`/review/edit/${title}`}>
                            <LinkItemWrap>수정</LinkItemWrap>
                        </Link> 
                        <button onClick={deleteReview}>
                            <LinkItemWrap>삭제</LinkItemWrap>
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

const LinkItem = styled.div`
    color: white
`

const LinkItemWrap = tw(LinkItem)`
    p-1 
    px-3
    bg-gray-400
    text-base
    tracking-tight
    rounded-xl
    text-center
    whitespace-nowrap
`