import React from "react";
import "../../tailwind.css";
import styles from "../../styles/ActiveClass.module.css";
import { targetReviewsType } from "../../pages/Detail";

interface HashTagBarProps {
  reviewList: Array<targetReviewsType>
}

export default function HashTagBar({ reviewList }: HashTagBarProps) {
  const hashtagList : Array<string> = []
  if(reviewList) {
    reviewList.map((review) => {
      if(review.hashtag) {
        review.hashtag.map((item) => {
          hashtagList.push(item)
        })
      }
    }, [reviewList])
  } 

  return (
    <>
      <ul
        className={`${styles.hashTagBar} flex gap-3 w-[350px] mt-3 overflow-auto whitespace-nowrap text-lg`}
      >
        {hashtagList.length !== 0 &&
          hashtagList.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="text-base font-medium mb-2 p-[3px] px-3 bg-green-3 text-white rounded-xl shadow-md shadow-gray-300"
              >
                {item}
              </li>
            );
        })}
      </ul> 
    </>
  );
}
