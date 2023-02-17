import { useState } from "react";
import star from "../assets/icons/starActive.png";
import unStar from "../assets/images/star.png";

const FavoriteButton = () => {
  const [flag, setFlag] = useState(false);

  const handleFlag = () => {
    setFlag((prev) => !prev);
  };

  return (
    <button onClick={handleFlag}>
      <img className="rounded-full" src={flag ? star : unStar} width="60" />
    </button>
  );
};

export default FavoriteButton;
