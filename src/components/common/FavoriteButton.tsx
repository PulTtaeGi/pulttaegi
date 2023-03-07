import { useState } from "react";
import { useCallback, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../api/firebase";
import { useNavigate } from "react-router";
import { MarketType } from "../../store/modules/market";
import { Link } from "react-router-dom";


interface marketProps{
  market : MarketType
}

const FavoriteButton = (market:marketProps ) => {
  console.log(market);
  // detail market 정보 있음 -> 이걸 받아아야됨 -> firestore 저장
  const navigate = useNavigate();
  const UNSTAR_URL = "../../src/assets/icons/star.png";
  const STAR_URL = "../../src/assets/icons/starActive.png";

  const handleSignUp = useCallback(async () => {
    const favoriteRef = collection(firestore, "favorites");
    
    const data = await getDocs(favoriteRef);

    
    for (const doc of data.docs) {
      
      if(doc.data().id === localStorage.id &&
         doc.data().title === market.market.title )
    {    setFlag((prev) => !prev);
      // const [flag, setFlag] = useState(true)
      alert("이미 등록된 즐겨찾기 입니다.")
      
      return;
    }
    if(localStorage.id === "")
    {
      alert("로그인 후 이용해주세요");
      navigate("/login");
      return;
    }
  }
    try {
      await addDoc(favoriteRef, {
        id: localStorage.id,
        title: market.market.title,
        menu: market.market.menu,
        img: market.market.img,

      }).then(() => {
        alert("즐겨찾기 등록에 성공했어요");

        setFlag((prev) => !prev);
        
      });
    } catch (e) {
      alert("즐겨찾기에 등록 실패했어요");
      navigate("/login");
      console.error(e);
    }
  }, []);
 
  const [flag, setFlag] = useState(false);
  
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
