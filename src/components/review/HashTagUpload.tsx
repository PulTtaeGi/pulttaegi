const HashTagUpload = (): JSX.Element => {
  return (
    <div>
      <label
        htmlFor="hashTag"
        className="mb-2 text-sm font-medium text-gray-900"
      >
        해시태그 (선택)
      </label>
      <input
        type="text"
        id="hashTag"
        className="block h-12 w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="태그를 입력하세요."
        required
      />
    </div>
  );
};

export default HashTagUpload;
