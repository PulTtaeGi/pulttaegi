import "./tailwind.css";

function First() {
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <Component />
      <Component />
      <Component />
    </div>
  );
}

export default First;

const Component = () => {
  return (
    <div className="flex  flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex">
          웰빙 맛있는
          <img src="/public/pngegg.png" width="20" />
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-200">수정</div>
          <div className="bg-gray-200">삭제</div>
        </div>
      </div>
      <img src="/public/1-6.png" width="200" />
      이거이거 맛있어
      <div className="bg-gray-200 w-20">#해시태그</div>
    </div>
  );
};
