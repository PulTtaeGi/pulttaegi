import PrimaryButton from "../PrimaryButton";

interface ReviewWriteProps {
  title: string;
}

const ReviewWrite = ({title} : ReviewWriteProps) => {
  return (
    <div className="relative flex w-full items-center justify-center pb-12">
      <div className="flex flex-col gap-2">
        <PrimaryButton color="green-3" link={`/review/${title}`}>
          리뷰 작성하기
        </PrimaryButton>
        <span className="w-full tracking-tight text-lg">
          리뷰 작성은 로그인 후 이용 가능합니다.
        </span>
      </div>
    </div>
  );
};

export default ReviewWrite;
