const Rating = ({
  title,
  number,
  color,
}: {
  title: string;
  number: number;
  color: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="block w-[50px] text-center">{title}</span>
      <div
        style={{
          width: number * 50 + "px",
        }}
        className={`h-[24px] rounded-r-lg shadow bg-green-${color}`}
      ></div>
      <span className="text-lg tracking-tight font-medium text-gray-400">
        {number}
      </span>
    </div>
  );
};
export default Rating;
