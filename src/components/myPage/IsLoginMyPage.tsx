import LinkItem from "./LinkItem";

const IsLoginMyPage = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col mt-40 w-4/5 h-4/5 my-0 mx-auto">
        <div className="flex justify-start flex-row border-b-4 pb-2">
          <div>🙎🏻</div>
          <p className="text-3xl font-bold ml-6">ABC123</p>
        </div>
        <div className="mt-4">
          <LinkItem text="내가 쓴 리뷰" />
          <LinkItem text="즐겨찾기" />
        </div>
      </div>
      <button className="btn w-32 my-0 mx-auto mt-60 bg-myGreen border-myGreen  hover:bg-myDarkGreen hover:border-myGreen">
        로그아웃
      </button>
    </>
  );
};

export default IsLoginMyPage;
