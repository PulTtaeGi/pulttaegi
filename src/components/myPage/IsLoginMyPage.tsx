import LinkItem from "./LinkItem";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { deleteInfo } from "../../store/modules/signup";

const IsLoginMyPage = (): any => {
  const user = useAppSelector((state) => state.signup)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function goToLogout () {
    dispatch(deleteInfo())
    navigate("/")
  }

  return (
    <>
      <div className="flex flex-col mt-40 w-4/5 h-4/5 my-0 mx-auto">
        <div className="flex justify-start flex-row border-b-4 pb-2">
          <div>🙎🏻</div>
          <p className="text-3xl font-bold ml-6">{user.signupUserInfo.id}님</p>
        </div>
        <div className="mt-4">
          <LinkItem link="/review/my" text="내가 쓴 리뷰" />
          <LinkItem link="/total" text="즐겨찾기" />
        </div>
      </div>
      <button 
        onClick={goToLogout} 
        className="btn w-32 my-0 mx-auto mt-60 bg-myGreen border-myGreen  hover:bg-myDarkGreen hover:border-myGreen">
        로그아웃
      </button>
    </>
  );
};

export default IsLoginMyPage;
