import { useState } from "react";
import IsLoginMyPage from "../components/myPage/IsLoginMyPage";
import IsNotLoginMyPage from "../components/myPage/IsNotLoginMyPage";

const MyPage = () => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div className="text-center text-2xl">
      {isLogin ? (
        <>
          <IsLoginMyPage />
        </>
      ) : (
        <>
          <IsNotLoginMyPage />
        </>
      )}
      <div className="mt-4 text-xs text-gray-400 ">
        copyright 2023. pulttaegi
      </div>
    </div>
  );
};

export default MyPage;
