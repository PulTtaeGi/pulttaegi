import PrimaryButton from "../PrimaryButton";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { useState, useEffect } from "react"

interface ReviewWriteProps {
  title: string;
}

const ReviewWrite = ({title} : ReviewWriteProps) => {
  const user = useAppSelector((state) => state.signup)
  const [isLogin, setIsLogin] = useState(false)
  const [isActive, setIsActive] = useState("hidden")

  useEffect(() => {
    user.signupUserInfo.id ? setIsLogin(true) : null
  }, [])

  function handleWrite() {
    if(isLogin === false) {
      setIsActive("block")
    } return
  }

  return (
    <div className="relative flex w-full items-center justify-center pb-12">
      <div className="flex flex-col gap-2">
        <PrimaryButton color="green-3" link={isLogin ? `/review/${title}` : "no"}>
          <div style={{width: "300px"}} onClick={handleWrite}>리뷰 작성하기</div>
        </PrimaryButton>
        <span className={`${isActive} w-full tracking-tight text-lg`}>
          리뷰 작성은 로그인 후 이용 가능합니다.
        </span>
      </div>
    </div>
  );
};

export default ReviewWrite;
