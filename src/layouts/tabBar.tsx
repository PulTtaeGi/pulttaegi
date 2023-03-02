import { Link } from "react-router-dom";
import mapIco from "../assets/icons/tabmap.png";
import reviewIco from "../assets/icons/tabreview.png";
import favoritewIco from "../assets/icons/tabstar.png";
import userIco from "../assets/icons/tabuser.png";
import homeIcoR from "../assets/icons/main_logo_r.png";
import tw from "tailwind-styled-components";

const TabBar = () => {
  return (
    // <BrowserRouter>
    <TabBarWrap
      id="tabBar"
      style={{
        borderTopRightRadius: "35px",
        borderTopLeftRadius: "35px",
      }}
    >
      <ul className="flex w-screen justify-center items-center">
        <li className="flex-1">
          <Link to="/" className="font-bold text-lg ">
            <img src={mapIco} className="w-7/12 m-auto " alt=""></img>
            <span>지도</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/review/total" className="font-bold text-lg ">
            <img src={reviewIco} className="w-7/12 m-auto " alt=""></img>
            <span>리뷰보기</span>
          </Link>
        </li>
        <li className="flex-1 items-center">
          <Link to="/" className="font-bold text-lg ">
            <img src={homeIcoR} className="w-7/12 m-auto " alt=""></img>
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/total" className="font-bold text-lg ">
            <img src={favoritewIco} className="w-7/12 m-auto " alt=""></img>
            <span>즐겨찾기</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/mypage" className="font-bold text-lg ">
            <img src={userIco} className="w-7/12 m-auto " alt=""></img>
            <span>My</span>
          </Link>
        </li>
      </ul>
    </TabBarWrap>
    // </BrowserRouter>
  );
};

const TabBarWrap = tw.div`
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
