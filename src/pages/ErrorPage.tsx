import image from "../assets/icons/main_logo.png";
import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="text-black font-bold bg-green-3 flex flex-col h-screen gap-7 justify-center items-center">
      <img src={image} width="100" />
      잘못된 요청입니다.
      <button className="text-black hover:bg-green-200 btn bg-green-2 border-none"
                >
        돌아가기
      </button>
    </div>
  );
}

export default ErrorPage;
