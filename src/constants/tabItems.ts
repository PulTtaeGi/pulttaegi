import homeIcoR from "../assets/icons/main_logo_r.png";
import beforeMapIcon from "../assets/icons/beforetabmap.png";
import beforeReviewIcon from "../assets/icons/beforetabreview.png";
import beforestarIcon from "../assets/icons/beforetabstar.png";
import beforeUserIcon from "../assets/icons/beforetabuser.png";
import userIcon from "../assets/icons/tabuser.png";
import mapIcon from "../assets/icons/tabmap.png";
import reviewIcon from "../assets/icons/tabreview.png";
import starIcon from "../assets/icons/tabstar.png";

interface ItabItem {
  title?: string;
  url?: string;
  img: string;
  beforeImg: string;
}

export const tabMenus: ItabItem[] = [
  {
    title: "지도",
    url: "/",
    img: mapIcon,
    beforeImg: beforeMapIcon,
  },
  {
    title: "리뷰보기",
    url: "/review/total",
    img: reviewIcon,
    beforeImg: beforeReviewIcon,
  },
  {
    img: homeIcoR,
    beforeImg: homeIcoR,
  },
  {
    title: "즐겨찾기",
    url: "/total",
    img: starIcon,
    beforeImg: beforestarIcon,
  },
  {
    title: "My",
    url: "/mypage",
    img: userIcon,
    beforeImg: beforeUserIcon,
  },
];
