import React from "react";
import Wrapper from "../layouts/Wrapper";
import BreadCrumb from "../components/common/BreadCrumb";
import ReviewList from "../components/myReview/ReviewList";
import TabBar from "../layouts/tabBar";
import { useAppSelector } from "../store/hooks/configureStore.hook";

export default function TotalReview() {
  const reviews = useAppSelector((state) => state.review);
  return (
    <Wrapper>
      <div className="flex flex-col w-full mx-8 mt-12 mb-40">
        <BreadCrumb count={reviews.length}>전체 리뷰</BreadCrumb>
        <ReviewList list={reviews} />
        <TabBar />
      </div>
    </Wrapper>
  );
}
