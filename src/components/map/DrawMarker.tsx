import { useEffect } from "react";
import markerdata from "../../data/markerData";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { Link } from "react-router-dom";
// 마커 기능
const DrawMarker = () => {
  const market = useAppSelector((state) => state.market);
  const kakaomaps = useAppSelector((state) => state.kakaomap);

  useEffect(() => {
    if (market == [] || kakaomaps.map == undefined) {
      return;
    } else if (
      Object.entries(kakaomaps.map).length !== 0 &&
      Object.entries(market).length !== 0
    ) {
      const marketArr = Object.keys(market).map((item) => market[item]);

      //  마커가 지도 위에 표시
      const makeMarker = () => {
        marketArr.forEach((el) => {
          const diffrentmarkerPosition = new window.kakao.maps.LatLng(
            el.lat,
            el.lng
          );
          // 현재위치 마커를 제외한 마커 생성
          const diffrentMarker = new window.kakao.maps.Marker({
            position: diffrentmarkerPosition,
          });
          const mar = new window.kakao.maps.Marker({
            //마커가 표시 될 지도
            map: kakaomaps.map,
            //마커가 표시 될 위치
            position: new window.kakao.maps.LatLng(el.lat, el.lng),
            //마커에 hover시 나타날 title
            title: el.title,
          });
          diffrentMarker.setMap(kakaomaps.map);

          // 마커 클릭 시 인포
          const infowindow = new window.kakao.maps.InfoWindow({
            content: el.title, // 인포윈도우에 표시할 내용
            removable: true,
          });

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
            `</div>`;
          // 마커 클릭 시 보여줄 내용 생성
          window.kakao.maps.event.addListener(
            diffrentMarker,
            "click",
            function () {
              // 마커 위에 인포윈도우를 표시
              infowindow.setContent(content);
              const info = document.querySelectorAll(".info");
              console.log(el);
              if (infowindow.getMap()) {
                infowindow.close();
              } else {
                infowindow.open(kakaomaps.map, mar);
                infowindow.setContent(content);
              }

              // 인포윈도우 css 강제변경
              info.forEach(function (e) {
                e.parentElement!.parentElement!.style.border = "none";
                e.parentElement!.parentElement!.style.borderRadius = "10px";
              });
            }
          );
        });
      };
      makeMarker();
    }
  }, [kakaomaps, market]);
};

export default DrawMarker;
