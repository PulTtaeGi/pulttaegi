import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import SearchedList from "./SearchedList";

interface RegionType {
  //주소
  address_name: string;
  //장소이름
  place_name: string;
  lat: number;
  lng: number;
}

export const RegionSearch = () => {
  const [regionArray, setRegionArray] = useState(Array<RegionType>);
  const tempArray: Array<RegionType> = [];

  // 키워드 검색이 끝나고 호출될 콜백 함수
  const placesSearchCB = (
    data: Array<RegionType>,
    status: any,
    pagination: any
  ) => {
    if (status === window.kakao.maps.services.Status.OK) {
      for (let i = 0; i < data.length; i++) {
        tempArray.push({
          address_name: data[i].address_name,
          place_name: data[i].place_name,
          lat: data[i].lat,
          lng: data[i].lng,
        });
      }
    }
    setRegionArray(tempArray);
  };

  const storedSearch = useAppSelector((state) => state.search.keyword);
  useEffect(() => {
    setRegionArray([]);
    console.log(storedSearch);
    const places = new window.kakao.maps.services.Places();

    // 키워드로 장소 검색
    places.keywordSearch(storedSearch, placesSearchCB, {
      useMapBounds: true,
    });
    console.log(regionArray);
  }, [storedSearch]);

  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen">
        <ul className="flex flex-col">
          {regionArray.map((region, i) => (
            <SearchedList
              key={i}
              address={region.address_name}
              place={region.place_name}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RegionSearch;
