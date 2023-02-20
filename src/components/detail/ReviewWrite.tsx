import PrimaryButton from "../PrimaryButton";

interface currentItemProps {
  id: number;
  title: string;
  address: string;
}

const ReviewWrite = () => {
  const currentItem: currentItemProps = {
    id: 1,
    title: "나우잇 샐러드카페 부산대점",
    address: "부산 금정구",
  };

  return (
    <div className="relative flex w-full items-center justify-center pb-12">
      <div className="flex flex-col gap-2">
        <PrimaryButton color="green-3" link={`/review/${currentItem.title}`}>
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
