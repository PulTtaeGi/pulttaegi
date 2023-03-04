import { useEffect, useState } from "react";
import BackArrow from "../components/common/BackArrow";
import BreadCrumb from "../components/common/BreadCrumb";
import ReviewList from "../components/myReview/ReviewList";
import Wrapper from "../layouts/Wrapper";
import { useAppSelector } from "../store/hooks/configureStore.hook";

export default function MyReview() {
  const reviews = useAppSelector((state) => state.review);
  const user = useAppSelector((state) => state.signup);
  const currentId = localStorage.getItem("id");
  const myReviews: any[] = [];

  reviews.map((item) => {
    if (item.userid === currentId) {
      myReviews.push(item);
    }
  });

  return (
    <Wrapper>
      <div className="flex flex-col w-full mx-8 mt-16 mb-40">
        <BackArrow />
        <BreadCrumb count={myReviews.length}>내가 쓴 리뷰</BreadCrumb>
        <ReviewList list={myReviews} />
      </div>
    </Wrapper>
  );
}
