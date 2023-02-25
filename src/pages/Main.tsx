import Map from "../components/map/map";
import TabBar from "../layouts/tabBar";
import Header from "../layouts/header";
import { useAppSelector } from "../state/store/hooks/configureStore.hook";
const Main = () => {
  return (
    <>
      
      <Header />
      <Map />
      <TabBar />
    </>
  );
};

export default Main;


