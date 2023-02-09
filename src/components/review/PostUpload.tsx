const PostUpload = (): JSX.Element => {
  return (
    <div className="">
      <label
        htmlFor="reviewText"
        className="mb-2 text-sm font-medium text-gray-900"
      >
        리뷰작성
      </label>
      <input
        type="text"
        id="reviewText"
        className="block p-4 w-full  h-44 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="음식의 맛, 양, 포장 상태 등 음식에 대한 솔직한 리뷰를 남겨주세요."
        required
      />
    </div>
  );
};

export default PostUpload;
