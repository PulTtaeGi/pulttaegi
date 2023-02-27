const Rating = ({ title, number }: { title: string; number: number }) => {
  if (number > 4) {
    number = ((number % 4) + 1) * 4;
  }
  console.log(title, number);
  return (
    <div className="flex items-center gap-2">
      <span className="block w-[50px] text-center">{title}</span>
      <div
        // className={`h-[24px] w-1/4 bg-green-3 rounded-r-lg shadow`}
        style={{
          width: number * 50 + "px",
        }}
        className={`h-[24px] rounded-r-lg shadow bg-green-${number}`}
        // className={`h-[24px] w-${number}*10 bg-green-${number} rounded-r-lg shadow`}
      ></div>
    </div>
  );
};
export default Rating;
