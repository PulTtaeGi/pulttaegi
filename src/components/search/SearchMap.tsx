import market from "../../store/modules/market";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import SearchResultBtn from "../common/SearchResultBtn";

import { useLocation } from "react-router";
import { DrawMarker } from "../map/DrawMarker";
const SearchMap = (kakaomap: any) => {
  const market = useAppSelector((state) => state.market);
  const location = useLocation();

  const kakaomaps = useAppSelector((state) => state.kakaomap);
  const geocoder = new window.kakao.maps.services.Geocoder();
  const marketAddress = location.state?.marketAddress;
  const marketTitle = location.state?.marketTitle;

  if (Object.keys(kakaomap).length != 0) {
    if (marketAddress != undefined) {
      reigionSearch();
    }
    if (marketTitle != undefined) {
      foodSearch();
    }
  }

  // 지역검색 시
  function reigionSearch() {
    // const marketArr = Object.keys(market).map((item) => market[item]);
    // // 지역 검색 시 마커 배열
    // marketArr.forEach((el) => {
    //   geocoder.addressSearch(el.address, function (result: any, status: any) {
    //     // 정상적으로 검색이 완료됐으면
    //     if (status === window.kakao.maps.services.Status.OK) {
    //       const coord = new window.kakao.maps.LatLng(result[0].y, result[0].x);

    //       // 이미지 변경

    //       const markerImage = new window.kakao.maps.MarkerImage(
    //         imageSrc,
    //         imageSize,
    //         imageOption
    //       );
    //       // 결과값으로 받은 위치를 마커로 표시
    //       const marker = new window.kakao.maps.Marker({
    //         map: kakaomap,
    //         position: coord,
    //         image: markerImage,
    //         title: el.category,
    //       });
    //       const content =
    //         `<div class='wrap customoverlay info bg-white p-4 border-0'>` +
    //         `<a href="/detail/${el.title}">` +
    //         `<div class="title text-xl font-bold text-black mb-1">` +
    //         `${el.title}` +
    //         `</div>` +
    //         `<div class="desc">` +
    //         `<div class="h-2 bg-lime-700 mb-1" style="width:${
    //           el.taste * 10
    //         }%"></div>` +
    //         `<div class="h-2 bg-amber-500 mb-1" style="width:${
    //           el.clean * 10
    //         }%"></div>` +
    //         `<p>${el.calorie} kal` +
    //         `</p>` +
    //         `</a>` +
    //         `</div>`;
    //       // 마커 클릭 시 인포
    //       const infowindow = new window.kakao.maps.CustomOverlay({
    //         content: content, // 인포윈도우에 표시할 내용
    //         removable: true,
    //         yAnchor: 1.6,
    //         xAnchor: 0.6,
    //         position: marker.getPosition(),
    //       });

    //       // 마커 클릭 시 보여줄 내용 생성
    //       window.kakao.maps.event.addListener(marker, "click", function () {
    //         // 마커 위에 인포윈도우를 표시
    //         if (infowindow.getMap()) {
    //           infowindow.setMap(null);
    //         } else {
    //           infowindow.setMap(kakaomap);
    //         }
    //       });
    //
    //     }
    //   });
    // });

    // 주소로 좌표를 검색
    geocoder.addressSearch(
      `${marketAddress}`,
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          // 지도의 중심을 결과값으로 받은 위치로 이동
          kakaomap.setCenter(coords);
          // // 이미지 변경
          // const imageSrc =
          //     "http://localhost:5173/src/assets/icons/marker_ico.png", // 마커이미지의 주소
          //   imageSize = new window.kakao.maps.Size(32, 55), // 마커이미지의 크기
          //   imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

          // const markerImage = new window.kakao.maps.MarkerImage(
          //   imageSrc,
          //   imageSize,
          //   imageOption
          // );
          // // 결과값으로 받은 위치를 마커로 표시
          // const marker = new window.kakao.maps.Marker({
          //   map: kakaomap,
          //   image: markerImage,
          // });

          // // 반경 표시
          // const circle = new window.kakao.maps.Circle({
          //   map: kakaomap,
          //   center: coords,
          //   radius: 3000, // m 단위, 반경 3km 설정
          //   strokeWeight: 2,
          //   strokeColor: "transparent",
          //   strokeOpacity: 0,
          //   strokeStyle: "none",
          //   fillColor: "transparent",
          //   fillOpacity: 0,
          // });
          // const radius = circle.getRadius();

          // // 마커들이 담긴 배열
          // coodsMarker.forEach((m: any) => {
          //   const c1 = kakaomap.getCenter();
          //   const c2 = m.getPosition();
          //   const poly = new window.kakao.maps.Polyline({
          //     // map: map, 을 하지 않아도 거리는 구할 수 있다.
          //     path: [c1, c2],
          //   });
          //   const dist = poly.getLength(); // m 단위로 리턴
          //   // 이 거리가 원의 반지름보다 작거나 같다면
          //   // if (dist < radius) {
          //   //   // 해당 marker는 원 안에 있는 것
          //   //   m.setMap(kakaomap);
          //   //   searchMarker.push(m);
          //   // } else {
          //   //   m.setMap(null);
          //   // }
          // });
        }
      }
    );
  }

  // 음식검색 시
  function foodSearch() {
    // 검색 된 음식점 주소로 좌표를 검색
    geocoder.addressSearch(
      `${marketTitle.address}`,
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          // 지도의 중심을 결과값으로 받은 위치로 이동

          kakaomap.setCenter(coords);
        }
      }
    );
  }

  return <>{marketAddress && <SearchResultBtn></SearchResultBtn>}</>;
};

export default SearchMap;
