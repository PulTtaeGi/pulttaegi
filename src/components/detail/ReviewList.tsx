import { useAppSelector } from "../../store/hooks/configureStore.hook";

interface reviewListProps {
  nickname: string;
  content: string;
}
const ReviewList = () => {
  const reviewList: Array<reviewListProps> = [
    {
      nickname: "랑구",
      content: "재료가 신선하네요",
    },
    {
      nickname: "1234",
      content: "가성비가 좋아요",
    },
    {
      nickname: "5678",
      content: "샐러드맛집 답게 건강하고 맛있어요~",
    },
  ];
  const reviews = useAppSelector((state) => state.review);

  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden mb-16 shadow-lg">
      <ul className="flex p-4 pt-2 pb-5 flex-col gap-2 w-full bg-gray-100">
        <span className="block text-xl font-extrabold text-green-4">
          REVIEW
        </span>
        {reviewList.map((item: reviewListProps, index: number) => {
          return (
            <div className="flex gap-2 font-semibold" key={index}>
              <span className="whitespace-nowrap">{item.nickname}님</span>
              <li className="block max-w-[250px] text-gray-500 tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                {item.content}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewList;
