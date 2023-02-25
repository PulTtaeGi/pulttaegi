import Map from "../components/map/Map";
import TabBar from "../layouts/TabBar";
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


