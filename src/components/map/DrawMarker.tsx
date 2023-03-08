import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { Link, useLocation, useNavigate } from "react-router-dom";
import markerIcon from "../../assets/icons/marker_ico.png";
// filter 시 사용될 배열
const markersArr: any = [];
const markerData: any = [];

// 마커 기능
export const DrawMarker = () => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);

  const market = useAppSelector((state) => state.market);
  const location = useLocation();
  const marketTitle = location.state?.marketTitle;
  const marketAddress = location.state?.marketAddress;
  const navigate = useNavigate();

  useEffect(() => {
    if (market === null || kakaomaps.map == undefined) {
      return;
    } else if (
      Object.entries(kakaomaps.map).length !== 0 &&
      Object.entries(market).length !== 0
    ) {
      const marketArr = Object.keys(market).map((item) => market[item]);

      //  마커가 지도 위에 표시
      const makeMarker = () => {
        console.log(1);
        marketArr.forEach((el) => {
          markerData.push(el);

          // 이미지 변경
          const imageSrc = markerIcon, // 마커이미지의 주소
            imageSize = new window.kakao.maps.Size(32, 55), // 마커이미지의 크기
            imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );
          const mar = new window.kakao.maps.Marker({
            //마커가 표시 될 위치
            position: new window.kakao.maps.LatLng(el.lat, el.lng),
            //카테고리 클릭 시 사용 될 제목
            title: el.category,
            image: markerImage,
          });
          if (markersArr.length <= marketArr.length) {
            markersArr.push(mar);
          }
        });
        addMarker(kakaomaps.map);
      };
      makeMarker();
    }
  }, [kakaomaps, marketTitle, marketAddress]);
};

export const addMarker = (kakaomaps: any) => {
  for (let i = 0; i < markersArr.length; i++) {
    markersArr[i].setMap(kakaomaps);

    // 인포 표시
    const content =
      `<div class='wrap customoverlay info bg-white rounded-3xl p-4 shadow-lg bg-slate-50  justify-around  border-stone-100 border-2'>` +
      `<div class="title text-xl font-bold text-black mb-2">` +
      `${markerData[i].title}` +
      `</div>` +
      `<div class="desc">` +
      `<div class="h-2 bg-green-3 mb-1" style="width:${
        markerData[i].wellbeing * 20
      }%"></div>` +
      `<div class="h-2 bg-green-2 mb-1" style="width:${
        markerData[i].taste * 20
      }%"></div>` +
      `<div class="h-2 bg-green-4 mb-1" style="width:${
        markerData[i].clean * 20
      }%"></div>` +
      `<a href="/detail/${markerData[i].title}" class="w-full block bg-amber-500 border-0 text-center text-white font-semibold btn flex py-1" style="min-height:2rem; height:2rem">자세히 보기` +
      `</a>` +
      `</div>`;
    // 마커 클릭 시 인포
    const infowindow = new window.kakao.maps.CustomOverlay({
      content: content, // 인포윈도우에 표시할 내용
      removable: true,
      xAnchor: 0.6,
      yAnchor: 1.6,
      position: markersArr[i].getPosition(),
    });

    // 마커 클릭 시 보여줄 내용 생성
    window.kakao.maps.event.addListener(markersArr[i], "click", function () {
      // 마커 위에 인포윈도우를 표시
      if (infowindow.getMap()) {
        infowindow.setMap(null);
      } else {
        infowindow.setMap(kakaomaps);
      }
    });
  }
};

export const removeMarker = () => {
  for (let i = 0; i < markersArr.length; i++) {
    markersArr[i].setMap(null);
  }
};

export const filterMarker = (categoryName: string, kakaomaps: object) => {
  console.log(categoryName);

  for (let i = 0; i < markersArr.length; i++) {
    markersArr[i].setMap(null);
    if (markersArr[i].Gb == categoryName) {
      markersArr[i].setMap(kakaomaps);
      const content =
        `<div class='wrap customoverlay info bg-white rounded-3xl p-4 shadow-lg bg-slate-50  justify-around  border-stone-100 border-2'>` +
        `<div class="title text-xl font-bold text-black mb-2">` +
        `${markerData[i].title}` +
        `</div>` +
        `<div class="desc">` +
        `<div class="h-2 bg-green-3 mb-1" style="width:${
          markerData[i].wellbeing * 20
        }%"></div>` +
        `<div class="h-2 bg-green-2 mb-1" style="width:${
          markerData[i].taste * 20
        }%"></div>` +
        `<div class="h-2 bg-green-4 mb-1" style="width:${
          markerData[i].clean * 20
        }%"></div>` +
        `<a href="/detail/${markerData[i].title}" class="w-full block bg-amber-500 border-0 text-center text-white font-semibold btn flex py-1" style="min-height:2rem; height:2rem">자세히 보기` +
        `</a>` +
        `</div>`;
      // 마커 클릭 시 인포
      const infowindow = new window.kakao.maps.CustomOverlay({
        content: content, // 인포윈도우에 표시할 내용
        removable: true,
        xAnchor: 0.6,
        yAnchor: 1.6,
        position: markersArr[i].getPosition(),
      });

      // 마커 클릭 시 보여줄 내용 생성
      window.kakao.maps.event.addListener(markersArr[i], "click", function () {
        // 마커 위에 인포윈도우를 표시
        if (infowindow.getMap()) {
          infowindow.setMap(null);
        } else {
          infowindow.setMap(kakaomaps);
        }
      });
    }
  }
};
