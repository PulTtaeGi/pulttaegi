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

    const localId = localStorage.getItem("id");
    

    async function fetchData() {
      const data = await getDocs(favoritesCollectionRef);
      console.log(data.docs.map((dos) => dos.id));

      setFavorites(
        data.docs
        .filter((doc) => doc.data()?. id === localId)
        .map((doc) => {

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
      
    </div>
  );
}

export default Second;

const Component = ({ docData }: { docData: any }) => {

  
  
  // const LocalId = localStorage.getItem("id");


  console.log (docData)
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <div className="flex flex-col gap-4">
        {docData.data.title}
        <div className="flex justify-between w-80 items-center   ">
          <div className="flex items-center   gap-4">
            <img className="rounded-full" src={docData.data.img} width="80" />
            <div>
              맛집<div>대표 메뉴: {docData.data.menu[0].menuName}</div>
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
