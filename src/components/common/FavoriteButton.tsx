import { useState } from "react";

const FavoriteButton = () => {
  const UNSTAR_URL = "../../assets/icons/star.png";
  const STAR_URL = "../../assets/icons/starActvie.png";

  const [flag, setFlag] = useState(false);

  const handleFlag = () => {
    setFlag((prev) => !prev);
  };

  return (
    <button onClick={handleFlag}>
      <img
        className="rounded-full"
        src={flag ? STAR_URL : UNSTAR_URL}
        width="60"
      />
    </button>
  );
};

export default FavoriteButton;
