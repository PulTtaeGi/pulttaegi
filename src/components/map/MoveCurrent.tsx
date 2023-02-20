import currentIco from "../../assets/icons/current_ico.png";
import CurrentMarker from "./CurrentMarker";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
// 현재위치로 이동
const MoveCurrent = () => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);

  function move() {
    const moveLatLon = new window.kakao.maps.LatLng(
      kakaomaps.location.latitude,
      kakaomaps.location.longitude
    );

    // 지도 중심을 이동 시킵니다
    kakaomaps.map.setCenter(moveLatLon);
  }

  return (
    <button
      onClick={move}
      className="fixed z-10 bg-slate-50 border-stone-300 border-2 shadow-2xl p-3 rounded-xl"
      style={{ right: "20px", bottom: "130px" }}
    >
      <img src={currentIco} className="w-9"></img>
    </button>
  );
};

export default MoveCurrent;
