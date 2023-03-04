import { useState } from "react";
import { useCallback, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../api/firebase";
import { useNavigate } from "react-router";
import { MarketType } from "../../store/modules/market";

interface marketProps{
  market : MarketType
}


const FavoriteButton = (market:marketProps ) => {
  console.log(market);
  // detail market 정보 있음 -> 이걸 받아아야됨 -> firestore 저장

  const UNSTAR_URL = "../../src/assets/icons/star.png";
  const STAR_URL = "../../src/assets/icons/starActive.png";

  const handleSignUp = useCallback(async () => {
    const favoriteRef = collection(firestore, "favorites");
    // const navigate = useNavigate();
    try {
      await addDoc(favoriteRef, {
        id: localStorage.id,
        title: market.market.title,
        menu: market.market.menu,
        img: market.market.img,

      }).then(() => {
        alert("즐겨찾기 등록에 성공했어요");

        setFlag((prev) => !prev);
        // navigate("/total");
      });
    } catch (e) {
      alert("즐겨찾기에 등록 실패했어요");
      console.error(e);
    }
  }, []);

  const [flag, setFlag] = useState(false);

  // const handleFlag = () => {
  //   setFlag((prev) => !prev);

  // };

  return (
    <button onClick={handleSignUp}>
      <img
        className="block w-[30px] h-[30px]"
        src={flag ? STAR_URL : UNSTAR_URL}
        width="60"
      />
    </button>
  );
};

export default FavoriteButton;
