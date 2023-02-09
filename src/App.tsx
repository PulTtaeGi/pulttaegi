import "./tailwind.css";
import Map from "./components/map/map";
import TabBar from "./layouts/tabBar";
import Header from "./layouts/header";
function App() {
  return (
    <>
      <Header />
      <Map />
      <TabBar />
    </>
  );
}

export default App;
