
import TabBar from "../layouts/tabBar";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../api/firebase";
import reviewimage from "../assets/icons/1-6.png";
import BackArrow from "../components/common/BackArrow";
// import BreadCrumb from "../components/common/BreadCrumb";
import FavoriteButton from "../components/common/FavoriteButton";


function Second() {
  const favoritesCollectionRef = collection(firestore, "favorites");
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDocs(favoritesCollectionRef);
      setFavorites(data.docs.map((doc) => doc.data()));
    }
    fetchData();
  }, []);

  return (
    <div>
      <BackArrow />
      {/* <BreadCrumb /> */}
      {favorites.map((favorite) => {
        return <Component doc={favorite} key={favorite.id} />;
      })}
      <TabBar />
    </div>
  );
}

export default Second;

const Component = ({ doc }: { doc: any }) => {
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <div className="flex flex-col gap-4">
        {doc.title}
        <div className="flex justify-between w-80 items-center   ">
          <div className="flex items-center   gap-4">
            <img className="rounded-full" src={reviewimage} width="80" />
            <div>
              맛집<div>대표 메뉴: {doc.menu}</div>
            </div>
          </div>
          <div onClick={() => deleteDoc(doc)}>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
};
