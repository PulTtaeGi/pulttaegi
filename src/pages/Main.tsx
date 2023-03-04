import Map from "../components/map/map";
import Header from "../layouts/header";
import { useAppSelector } from "../state/store/hooks/configureStore.hook";
const Main = () => {
  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default Main;
