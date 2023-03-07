import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { tabMenus } from "../constants/tabItems";

const TabBar = () => {
  const [tabIndex, setTabIndex] = useState<string>();
  useEffect(() => {
    setTabIndex(tabMenus[0].title);
  }, []);
  return (
    <TabBarWrap id="tabBar">
      <ul className="flex w-screen justify-center items-center">
        {tabMenus.map((tab) => (
          <li className="flex-1" key={tab.title}>
            {tab.url ? (
              <Link
                to={tab.url}
                className="font-bold text-lg flex flex-col gap-1 "
                onClick={() => setTabIndex(tab.title)}
              >
                <img
                  src={tabIndex === tab.title ? tab.img : tab.beforeImg}
                  className="w-5/12 m-auto "
                  alt="map"
                ></img>
                <span>{tab.title}</span>
              </Link>
            ) : (
              <img
                src={tabIndex === tab.title ? tab.img : tab.beforeImg}
                className="w-7/12 m-auto "
                alt="map"
              ></img>
            )}
          </li>
        ))}
      </ul>
    </TabBarWrap>
  );
};

const TabBarBox = styled.div`
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
`;
const TabBarWrap = tw(TabBarBox)`
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
py-5
`;

export default TabBar;
