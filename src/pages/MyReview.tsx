import { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import ReviewList from "../components/myReview/ReviewList";
import TabBar from "../layouts/tabBar";
import Wrapper from "../layouts/Wrapper";
import { useAppSelector } from "../store/hooks/configureStore.hook";


export default function MyReview() {
    const reviews = useAppSelector((state) => state.review)
    const currentId = "admin"
    const myReviews : any[] = []
  
    reviews.map((item) => {
        if(item.userid === currentId) {
            myReviews.push(item)
        }
    })

    console.log(myReviews)

    return ( 
        <Wrapper>
            <div className="flex flex-col w-full mx-8 mt-12 mb-40">
                <BreadCrumb count={myReviews.length}>내가 쓴 리뷰</BreadCrumb>
                <ReviewList list={myReviews}/>
                <TabBar />
            </div>
        </Wrapper>
    )
}