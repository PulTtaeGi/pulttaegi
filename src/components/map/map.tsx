import React, { useState, useEffect, useRef } from "react";
import { Location } from "../../data/location";
import markerdata from "../../data/markerData";
import currentIco from "../../assets/icons/current_ico.png";

declare global {
  interface Window {
    kakao: any;
  }
} // kakao 전역객체

const Map: React.FC = () => {
  const location: any = Location();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>({});
  const settingMap = () => {
    useEffect(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
        ),
        level: 2,
      };

      setMap(new window.kakao.maps.Map(container, options));

      drawMarker();
    }, [location]); // 현재 위치 갱신 후 re-render
  };

  // 마커 기능
  const drawMarker = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude
      ),
      level: 2,
    };
    const map = new window.kakao.maps.Map(container, options); // 지도를 생성

    // 현재위치가 표시될 마커
    const markerPosition = new window.kakao.maps.LatLng(
      location.latitude,
      location.longitude
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

    marker.setMap(map);

    // 마커가 지도 위에 표시
    const makeMarker = () => {
      markerdata.forEach((el) => {
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
          map: map,
          //마커가 표시 될 위치
          position: new window.kakao.maps.LatLng(el.lat, el.lng),
          //마커에 hover시 나타날 title
          title: el.title,
        });
        diffrentMarker.setMap(map);

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
          `</div>`; // 마커 클릭 시 보여줄 내용 생성
        window.kakao.maps.event.addListener(
          diffrentMarker,
          "click",
          function () {
            // 마커 위에 인포윈도우를 표시
            infowindow.setContent(content);
            infowindow.open(map, mar);
            const info = document.querySelectorAll(".info");

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
  };

  settingMap();

  // 현재위치로 이동
  const move = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude
      ),
      level: 2,
    };
    const map = new window.kakao.maps.Map(container, options); // 지도를 생성
    // 이동할 위도 경도 위치를 생성
    const moveLatLon = new window.kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );
    // 지도 중심을 이동
    map.panTo(moveLatLon);
    drawMarker();
  };
  return (
    <>
      {/* 현재위치 이동 버튼 */}
      <button
        onClick={move}
        className="fixed z-10 bg-slate-50 border-stone-300 border-2 shadow-2xl p-3 rounded-xl"
        style={{ right: "20px", bottom: "130px" }}
      >
        <img src={currentIco} className="w-9"></img>
      </button>
      {/* 초기 맵 */}
      <div id="map" className="w-screen h-screen" ref={mapRef} />;
    </>
  );
};

export default Map;
