import { collection, getDocs } from "firebase/firestore";
import TabBar from "../layouts/tabBar";
import {firestore} from "../api/firebase";
import reviewimage from "../assets/icons/1-6.png";
import starimage from "../assets/icons/pngwing.com.png";
import FavoriteButton from "../components/common/FavoriteButton";

function First() {
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <Component title="인천" />
      <Component title="강남" />
      <TabBar />
    </div>
  );
}

export default First;

const Component = ({ title }: { title: string }) => {
  const favoritesCollectionRef = collection(firestore, "favorites");
  const data = getDocs(favoritesCollectionRef);

  data.then((data) =>
    data.docs.map((doc) => {
      return (
        <div className="flex flex-col gap-4" key={doc.id}>
          {doc.data().title}
          <div className="flex justify-between w-80 items-center	">
            <div className="flex items-center	gap-4">
              <img className="rounded-full" src={reviewimage} width="80" />
              <div>
                인천 맛집<div>대표 메뉴</div>
              </div>
            </div>

            <img className="rounded-full" src={starimage} width="60" />
          </div>
          <div className="flex justify-between w-80 items-center	">
            <div className="flex items-center	gap-4">
              <img className="rounded-full" src={reviewimage} width="80" />
              <div>
                인천 맛집<div>대표 메뉴</div>
              </div>
            </div>
            <FavoriteButton />
            <img className="rounded-full" src={starimage} width="60" />
          </div>
          <div className="flex justify-between w-80 items-center	">
            <div className="flex items-center	gap-4">
              <img className="rounded-full" src={reviewimage} width="80" />
              <div>
                인천 맛집<div>대표 메뉴</div>
              </div>
            </div>

            <img className="rounded-full" src={starimage} width="60" />
          </div>
        </div>
      );
    })
  );
  return <div></div>;
};

