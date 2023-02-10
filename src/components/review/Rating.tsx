import { useEffect, useState } from "react";

const Rating = ({ title }: { title: string }) => {
  const ratingState: Array<string> = [];
  const [ratingOnOff, setRatingOnOff] = useState(ratingState);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      ratingState.push("bx bx-checkbox pointer");
    }
    setRatingOnOff(ratingState);
  }, []);

  const mouseOverRating = (index: number) => {
    const tempRating: Array<string> = [];
    for (let i = 0; i < 5; i += 1) {
      if (i <= index) {
        tempRating.push("bx bxs-checkbox pointer");
      } else {
        tempRating.push("bx bx-checkbox pointer");
      }
      setRatingOnOff(tempRating);
    }
  };

  return (
    <div className="flex flex-row mt-2">
      <div className="font-bold ">{title}</div>
      <div className="ml-3 leading-8">
        <i className={ratingOnOff[0]} onClick={() => mouseOverRating(0)} />
        <i className={ratingOnOff[1]} onClick={() => mouseOverRating(1)} />
        <i className={ratingOnOff[2]} onClick={() => mouseOverRating(2)} />
        <i className={ratingOnOff[3]} onClick={() => mouseOverRating(3)} />
        <i className={ratingOnOff[4]} onClick={() => mouseOverRating(4)} />
      </div>
    </div>
  );
};

export default Rating;
