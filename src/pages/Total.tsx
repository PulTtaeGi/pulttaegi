import TabBar from "../layouts/tabBar";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../api/firebase";
import reviewimage from "../assets/icons/1-6.png";
import BackArrow from "../components/common/BackArrow";
import BreadCrumb from "../components/common/BreadCrumb";
import FavoriteButton from "../components/common/FavoriteButton";

function Second() {
  const favoritesCollectionRef = collection(firestore, "favorites");
  const [favorites, setFavorites] = useState<any[]>([]);
  const myfavorites : any[] = []
  useEffect(() => {
    async function fetchData() {
      const data = await getDocs(favoritesCollectionRef);
      setFavorites(
        data.docs.map((doc) => {
          return {
            data: doc.data(),
            id: doc.id,
          };
        })
      );
    }
    fetchData();
  }, []);

  console.log(favorites);

  return (
    <div>
      <BackArrow />
      <br></br>
      <br></br>
      <br></br>
      <BreadCrumb count={myfavorites.length}>  즐겨찾기</BreadCrumb>
      {favorites.map((favorite) => {
        return <Component docData={favorite} key={favorite.id} />;
      })}
      <TabBar />
    </div>
  );
}

export default Second;

const Component = ({ docData }: { docData: any }) => {
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <div className="flex flex-col gap-4">
        {docData.data.title}
        <div className="flex justify-between w-80 items-center   ">
          <div className="flex items-center   gap-4">
            <img className="rounded-full" src={reviewimage} width="80" />
            <div>
              맛집<div>대표 메뉴: {docData.data.menu}</div>
            </div>
          </div>
          <button
            onClick={async () =>
              await deleteDoc(doc(firestore, "favorites", docData.id))
            }
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};
