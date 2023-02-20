import DrawMarker from "./DrawMarker";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { useEffect } from "react";
const CurrentMarker = () => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);

  useEffect(() => {
    if (kakaomaps.map == undefined || kakaomaps.location == undefined) {
      return;
    } else if (
      Object.entries(kakaomaps.map).length !== 0 &&
      kakaomaps.location
    ) {
      // 현재위치가 표시될 마커

      const markerPosition = new window.kakao.maps.LatLng(
        kakaomaps.location.latitude,
        kakaomaps.location.longitude
      );

      // 현재위치 마커 이미지 변경
      const imageSrc =
          "http://localhost:5173/src/assets/icons/currentMarker_icon.png", // 마커이미지의 주소
        imageSize = new window.kakao.maps.Size(48, 48), // 마커이미지의 크기
        imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      // 마커를 생성
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });
      marker.setMap(kakaomaps.map);
    }
  }, [kakaomaps]);

  return;
};

export default CurrentMarker;
