import HashTagUpload from "./HashTagUpload";
import ImgUpload from "./ImgUpload";
import PostUpload from "./PostUpload";
import Rating from "./Rating";

const EditingReview = (): JSX.Element => {
  return (
    <div className="flex flex-col text-xl w-4/5 mx-auto my-16">
      <div className="font-bold text-2xl">리뷰 작성</div>
      <div className="mt-2 font-semibold">강남맛집</div>
      <form method="post" encType="multipart/form-data">
        <ImgUpload />
        <div>
          <Rating title="맛" />
          <Rating title="위생" />
        </div>
        <PostUpload />
        <HashTagUpload />
        <div className="flex flex-row justify-around mt-4">
          <button className="btn w-20 bg-myGreen border-myGreen bg-myGreen border-myGreen  hover:bg-myDarkGreen hover:border-myGreen">
            취소
          </button>
          <button className="btn w-20 bg-myGreen border-myGreen bg-myGreen border-myGreen  hover:bg-myDarkGreen hover:border-myGreen">
            수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditingReview;
