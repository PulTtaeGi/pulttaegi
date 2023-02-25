import { useState } from "react";
import star from "../../assets/icons/starActvie.png"
import unstar from "../../assets/icons/star.png"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { firestore} from "../../api/firebase";
import { useCallback, useRef } from "react";



const FavoriteButton = async () => {
  const favoritesRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLButtonElement>(null);
  const UNSTAR_URL = "../../assets/icons/star.png"
  const STAR_URL = "../../assets/icons/starActvie.png"


  const [flag, setFlag] = useState(false);

  const handleFlag = () => {
    setFlag((prev) => !prev);
  };

  return (
    <button onClick={handleFlag}>
      <img className="rounded-full" src={flag ? STAR_URL : UNSTAR_URL} width="60" />
    </button>
  );
  
  // if (useState(true)){
  //   const favoritesCollectionRef = collection(firestore, "fovorites");
  //   const data = await getDocs(favoritesCollectionRef);
  //   alert("즐겨찾기에 등록 되었습니다.")
  // }

  // const favoritesCollectionRef = collection(firestore, "favorites");
  // try{
  //   await addDoc(favoritesCollectionRef ,{
  //     img: imgRef.current?.value,
  //     menu: menuRef.current?.value,
  //     title: titleRef.current?.value,
  //   });
  

  // }
  // catch (e) {
  //   console.error(e);
  // }
};

export default FavoriteButton;
