const Rating = ({ title, number }: { title: string; number: number }) => {
  // console.log(title, number[1]);
  return (
    <div className="flex items-center gap-2">
      <span className="block w-[50px] text-center">{title}</span>
      <div
        // className={`h-[24px] w-1/4 bg-green-3 rounded-r-lg shadow`}
        className={`h-[24px] w-${number}/4 bg-green-1 rounded-r-lg shadow`}
      ></div>
    </div>
  );
};
export default Rating;
