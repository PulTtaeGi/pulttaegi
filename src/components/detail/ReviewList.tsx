import React from "react"
import { targetReviewsType } from "../../pages/Detail";

interface reviewListProps {
  reviewList: Array<targetReviewsType>
}

const ReviewList = ({reviewList} : reviewListProps ) => {

  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden mb-16 shadow-lg">
      <ul className="flex p-4 pt-2 pb-5 flex-col gap-2 w-full bg-gray-100">
        <span className="block text-xl font-bold text-green-4">
          REVIEW
        </span>
        { reviewList &&
          reviewList.map((item: targetReviewsType, index: number) => {
            return (
              <div className="flex gap-2 font-semibold" key={index}>
                <span className="whitespace-nowrap">{item.userid}님</span>
                <li className="block max-w-[250px] text-gray-500 tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.content}
                </li>
              </div>
            );
        })}
      </ul>
    </div>
  );
};

export default ReviewList;
