import Map from "../components/map/map";
import TabBar from "../layouts/tabBar";
import Header from "../layouts/header";
import { useAppSelector } from "../state/store/hooks/configureStore.hook";
const Main = () => {
  const user = useAppSelector((state) => state)
    console.log(user)
  return (
    <>
      
      <Header />
      <Map />
      <TabBar />
    </>
  );
};

export default Main;


