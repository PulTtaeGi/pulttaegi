import { Link } from "react-router-dom";
import homeIcoR from "../assets/icons/main_logo_r.png";
import beforeMapIcon from "../assets/icons/beforetabmap.png";
import beforeReviewIcon from "../assets/icons/beforetabreview.png";
import beforestarIcon from "../assets/icons/beforetabstar.png";
import beforeUserIcon from "../assets/icons/beforetabuser.png";
import userIcon from "../assets/icons/tabuser.png";
import mapIcon from "../assets/icons/tabmap.png";
import reviewIcon from "../assets/icons/tabreview.png";
import starIcon from "../assets/icons/tabstar.png";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const tabMenus = [
  {
    title: "지도",
    url: "/",
    cName: "bx bx-map-alt",
  },
  {
    title: "리뷰보기",
    url: "/review/total",
    cName: "bx bx-book-content",
  },
  {
    title: "즐겨찾기",
    url: "/total",
    cName: "bx bx-star ",
  },
  {
    title: "My",
    url: "/mypage",
    cName: "bx bxs-user-circle ",
  },
];
const TabBar = () => {
  const [tabIndex, setTabIndex] = useState<number>();
  useEffect(() => {
    setTabIndex(1);
  }, []);
  return (
    <TabBarWrap id="tabBar">
      <ul className="flex w-screen justify-center items-center">
        <li className="flex-1">
          <Link
            to="/"
            className="font-bold text-lg flex flex-col gap-1 "
            onClick={() => setTabIndex(1)}
          >
            <img
              src={tabIndex === 1 ? mapIcon : beforeMapIcon}
              className="w-5/12 m-auto "
              alt="map"
            ></img>
            <span>지도</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/review/total"
            className="font-bold text-lg flex flex-col gap-1"
            onClick={() => setTabIndex(2)}
          >
            <img
              src={tabIndex === 2 ? reviewIcon : beforeReviewIcon}
              className="w-5/12 m-auto "
              alt="review"
            ></img>
            <span>리뷰보기</span>
          </Link>
        </li>
        <li className="flex-1 items-center">
          <Link to="/" className="font-bold text-lg flex flex-col gap-1">
            <img src={homeIcoR} className="w-7/12 m-auto " alt="logo"></img>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/total"
            className="font-bold text-lg flex flex-col gap-1"
            onClick={() => setTabIndex(3)}
          >
            <img
              src={tabIndex === 3 ? starIcon : beforestarIcon}
              className="w-5/12 m-auto "
              alt="favorite"
            ></img>
            <span>즐겨찾기</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/mypage"
            className="font-bold text-lg flex flex-col gap-1"
            onClick={() => setTabIndex(4)}
          >
            <img
              src={tabIndex === 4 ? userIcon : beforeUserIcon}
              className="w-5/12 m-auto "
              alt="mypage"
            ></img>
            <span>My</span>
          </Link>
        </li>
      </ul>
    </TabBarWrap>
  );
};

const TabBarBox = styled.div`
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
`;
const TabBarWrap = tw(TabBarBox)`
h-28 
shadow-2xl 
bg-white 
flex 
justify-center 
items-center 
z-20 
fixed 
w-screen 
bottom-0 
left-0 
text-center 
border-t-2 
border-stone-300 
text-gray-500
`;

export default TabBar;
