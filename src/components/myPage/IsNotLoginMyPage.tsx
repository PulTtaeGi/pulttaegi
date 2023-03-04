import { Link } from "react-router-dom";

const IsNotLoginMyPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center mt-80">
      <div className="">로그인 후 이용해주세요.</div>
      <button className="btn w-36 mt-12 bg-green-3 border-green-3  hover:bg-myDarkGreen hover:border-myGreen">
        <Link to="/login">로그인하러 가기</Link>
      </button>
      <button className="btn w-36 mt-2 bg-green-3 border-green-3  hover:bg-myDarkGreen hover:border-myGreen">
        <Link to="/signup">회원가입</Link>
      </button>
    </div>
  );
};

export default IsNotLoginMyPage;
