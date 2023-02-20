import markerData from "../../data/markerData";
import market from "../../store/modules/market";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import kakaomap from "../../store/modules/kakaomap";
import { useEffect } from "react";
import DrawMarker from "../map/DrawMarker";
const SearchMap = () => {
  const market = useAppSelector((state) => state.market);
  const kakaomap = useAppSelector((state) => state.kakaomap);
  const geocoder = new window.kakao.maps.services.Geocoder();

  // 주소-좌표 변환 객체를 생성
  function search() {
    const coodsMarker: any = [];
    const marketArr = Object.keys(market).map((item) => market[item]);
    // // 주소로 좌표를 검색
    marketArr.forEach((el) => {
      geocoder.addressSearch(el.address, function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coord = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시
          const marker = new window.kakao.maps.Marker({
            map: kakaomap.map,
            position: coord,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
          window.kakao.maps.event.addListener(marker, "click", function () {
            const content =
              `<div class='wrap info p-4 border-0'>` +
              `<div class="title text-xl font-bold text-black mb-1">` +
              `${el.title}` +
              `<div class="close" onclick="closeOverlay()" title="닫기"></div>` +
              `</div>` +
              `<div class="desc">` +
              `<div class="h-2 bg-lime-700 mb-1" style="width:${
                el.taste * 10
              }%"></div>` +
              `<div class="h-2 bg-amber-500 mb-1" style="width:${
                el.clean * 10
              }%"></div>` +
              `<p>${el.calorie} kal` +
              `</p>` +
              `</div>`; // 마커 클릭 시 보여줄 내용 생성
            const info = document.querySelectorAll(".info");
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(kakaomap.map, marker);
              infowindow.setContent(content);
            }
            // 인포윈도우 css 강제변경
            info.forEach(function (e) {
              e.parentElement!.parentElement!.style.border = "none";
              e.parentElement!.parentElement!.style.borderRadius = "10px";
            });
          });
          marker.setMap(null);
          coodsMarker.push(marker);
        }
      });
    });

    // 주소로 좌표를 검색
    geocoder.addressSearch(
      "제주특별자치도 제주시 첨단로 242",
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시
          const marker = new window.kakao.maps.Marker({
            map: kakaomap.map,
            position: coords,
          });
          // 인포윈도우로 장소에 대한 설명을 표시
          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">검색  위치</div>',
          });

          infowindow.open(kakaomap.map, marker);
          // 지도의 중심을 결과값으로 받은 위치로 이동
          kakaomap.map.setCenter(coords);

          const circle = new window.kakao.maps.Circle({
            map: kakaomap.map,
            center: coords,
            radius: 500, // m단위
            strokeWeight: 2,
            strokeColor: "#FF00FF",
            strokeOpacity: 0.8,
            strokeStyle: "dashed",
            fillColor: "orange",
            fillOpacity: 0.5,
          });
          const radius = circle.getRadius();

          // 마커들이 담긴 배열
          coodsMarker.forEach((m: any) => {
            const c1 = kakaomap.map.getCenter();
            const c2 = m.getPosition();
            const poly = new window.kakao.maps.Polyline({
              // map: map, 을 하지 않아도 거리는 구할 수 있다.
              path: [c1, c2],
            });
            const dist = poly.getLength(); // m 단위로 리턴
            // 이 거리가 원의 반지름보다 작거나 같다면
            if (dist < radius) {
              // 해당 marker는 원 안에 있는 것
              m.setMap(kakaomap.map);
            } else {
              m.setMap(null);
            }
          });
        }
      }
    );
  }

  return (
    <button
      onClick={search}
      className="fixed z-20 bg-slate-50 border-stone-300 border-2 shadow-2xl p-3 rounded-xl"
      style={{ left: "20px", bottom: "160px" }}
    >
      지역검색
    </button>
  );
};

export default SearchMap;
