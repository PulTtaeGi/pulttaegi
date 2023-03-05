import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

interface ReviewWriteProps {
  title: string;
}

const ReviewWrite = ({ title }: ReviewWriteProps) => {
  const [isActive, setIsActive] = useState("hidden");
  const isLogin = localStorage.getItem("isLogin");

  function handleWrite() {
    if (!isLogin || isLogin == "false") {
      setIsActive("block");
    }
    return;
  }

  return (
    <div className="relative flex w-full items-center justify-center pb-12 mb-20">
      <div className="flex flex-col gap-2">
        <PrimaryButton
          color="green-3"
          link={isLogin === "true" ? `/review/${title}` : "no"}
        >
          <div style={{ width: "300px" }} onClick={handleWrite}>
            리뷰 작성하기
          </div>
        </PrimaryButton>
        <span className={`${isActive} text-align tracking-tight text-lg mx-auto`}>
          리뷰 작성은 로그인 후 이용 가능합니다.
        </span>
      </div>
    </div>
  );
};

export default ReviewWrite;
