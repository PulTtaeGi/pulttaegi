const HashTagUpload = (): JSX.Element => {
  return (
    <div className="mt-6">
      <label
        htmlFor="hashTag"
        className="block pb-2 text-lg font-bold text-green-4"
      >
        해시태그 (선택)
      </label>
      <input
        type="text"
        id="hashTag"
        className="block h-12 w-full p-4 text-sm font-semibold text-gray-900 rounded-lg bg-gray-100 outline-0"
        placeholder="태그를 입력하세요. 예시) #강남맛집 #샐러드맛집"
        required
      />
    </div>
  );
};

export default HashTagUpload;
