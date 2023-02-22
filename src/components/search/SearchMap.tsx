import markerData from "../../data/markerData";
import market from "../../store/modules/market";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import kakaomap from "../../store/modules/kakaomap";
import { useEffect } from "react";
import { DrawMarker, removeMarker } from "../map/DrawMarker";
const coodsMarker: any = [];

import { useLocation } from "react-router";
const SearchMap = () => {
  const market = useAppSelector((state) => state.market);
  const location = useLocation();

  const kakaomaps = useAppSelector((state) => state.kakaomap);
  const geocoder = new window.kakao.maps.services.Geocoder();
  const marketTitle = location.state?.marketTitle;
  const marketAddress = location.state?.marketAddress;

  if (!marketAddress) {
    return;
  } else {
    search();
  }
  // 주소-좌표 변환 객체를 생성
  function search() {
    // 기존 마커 삭제
    removeMarker();

    const marketArr = Object.keys(market).map((item) => market[item]);
    // 주소로 좌표를 검색
    marketArr.forEach((el) => {
      geocoder.addressSearch(el.address, function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coord = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시
          const marker = new window.kakao.maps.Marker({
            map: kakaomaps.map,
            position: coord,
          });
          const content =
            `<div class='wrap customoverlay info bg-white p-4 border-0'>` +
            `<a href="/detail/${el.title}">` +
            `<div class="title text-xl font-bold text-black mb-1">` +
            `${el.title}` +
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
            `</a>` +
            `</div>`;
          // 마커 클릭 시 인포
          const infowindow = new window.kakao.maps.CustomOverlay({
            content: content, // 인포윈도우에 표시할 내용
            removable: true,
            yAnchor: 1.4,
            position: marker.getPosition(),
          });

          // 마커 클릭 시 보여줄 내용 생성
          window.kakao.maps.event.addListener(marker, "click", function () {
            // 마커 위에 인포윈도우를 표시
            if (infowindow.getMap()) {
              infowindow.setMap(null);
            } else {
              infowindow.setMap(kakaomaps.map);
            }
          });
          coodsMarker.push(marker);
        }
      });
    });

    // 주소로 좌표를 검색
    geocoder.addressSearch(
      `${marketAddress}`,
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시
          const marker = new window.kakao.maps.Marker({
            map: kakaomaps.map,
            position: coords,
          });
          // 인포윈도우로 장소에 대한 설명을 표시
          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">검색  위치</div>',
          });

          infowindow.open(kakaomaps.map, marker);
          // 지도의 중심을 결과값으로 받은 위치로 이동
          kakaomaps.map.setCenter(coords);

          const circle = new window.kakao.maps.Circle({
            map: kakaomaps.map,
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
            const c1 = kakaomaps.map.getCenter();
            const c2 = m.getPosition();
            const poly = new window.kakao.maps.Polyline({
              // map: map, 을 하지 않아도 거리는 구할 수 있다.
              path: [c1, c2],
            });
            const dist = poly.getLength(); // m 단위로 리턴
            // 이 거리가 원의 반지름보다 작거나 같다면
            if (dist < radius) {
              // 해당 marker는 원 안에 있는 것
              m.setMap(kakaomaps.map);
            } else {
              m.setMap(null);
            }
          });
        }
      }
    );
  }

  return (
    <></>
    // <button
    //   onClick={search}
    //   className="fixed z-20 bg-slate-50 border-stone-300 border-2 shadow-2xl p-3 rounded-xl"
    //   style={{ left: "20px", bottom: "160px" }}
    // >
    //   지역검색
    // </button>
  );
};

export const searchfilterMarker = (categoryName: string, kakaomaps: any) => {
  console.log(categoryName);
  const removeInfo = document.querySelectorAll(
    ".customoverlay"
  ) as NodeListOf<Element>;

  // console.log(removeInfo);

  for (let i = 0; i < coodsMarker.length; i++) {
    coodsMarker[i].setMap(null);
    if (coodsMarker[i].Gb == categoryName) {
      coodsMarker[i].setMap(kakaomaps);
    }
  }
};

export default SearchMap;
