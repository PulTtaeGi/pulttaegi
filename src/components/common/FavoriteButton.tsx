import { useState } from "react";
import { useCallback, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../api/firebase";
import { useNavigate } from "react-router";


const FavoriteButton = () => {
  const UNSTAR_URL = "../../src/assets/icons/star.png";
  const STAR_URL = "../../src/assets/icons/starActive.png";
  

const handleSignUp = useCallback(async () => {
  const favoriteRef = collection(firestore, "favorites");
  const navigate = useNavigate();
  try {
    await addDoc(favoriteRef, {
      // favoriteRef.current?.value,
    }).then(() => {
      alert("즐겨찾기 등록에 성공했어요");
      setFlag((prev) => !prev);
      navigate("/total");

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
    <button onClick={handleSignUp}
             >
      <img
        className="rounded-full"
        src={flag ? STAR_URL : UNSTAR_URL}
        width="60"
      />
    </button>
  );
};

export default FavoriteButton;
