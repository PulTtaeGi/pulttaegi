import image from "../assets/icons/free-icon-sprout-163647.png"

function ErrorPage() {
  return (
    <div className="text-black font-bold bg-teal-400 flex flex-col h-screen gap-7 justify-center items-center">
      <img src={image} width="100" />
      잘못된 요청입니다.
      <button className="text-black hover:bg-green-200 btn bg-green-500 border-none">
        돌아가기
      </button>
    </div>
  );
}

export default ErrorPage;
