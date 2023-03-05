import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import RecordList, { RecordProps } from "./RecordList";
import SearchedList from "./SearchedList";

interface RegionType {
  address_name: string;
  place_name: string;
  lat: number;
  lng: number;
}

const RegionSearch = ({
  keywords,
  onClearKeywords,
  onRemoveKeyword,
}: RecordProps): JSX.Element => {
  const [regionArray, setRegionArray] = useState(Array<RegionType>);

  // 키워드 검색이 끝나고 호출될 콜백 함수
  const placesSearchCB = (
    data: Array<RegionType>,
    status: any,
    pagination: any
  ) => {
    if (status === window.kakao.maps.services.Status.OK) {
      for (let i = 0; i < data.length; i++) {
        regionArray.push({
          address_name: data[i].address_name,
          place_name: data[i].place_name,
          lat: data[i].lat,
          lng: data[i].lng,
        });
      }
    }
    setRegionArray(regionArray);
  };

  const searchKeyword = useAppSelector((state) => state.search.keyword);
  useEffect(() => {
    setRegionArray([]);
    const places = new window.kakao.maps.services.Places();

    // 키워드로 장소 검색
    places.keywordSearch(searchKeyword, placesSearchCB, {
      useMapBounds: true,
    });
  }, [searchKeyword]);

  useEffect(() => {
    setRegionArray([]);
  }, []);

  return (
    <>
      <div className="flex flex-col mt-36 pl-4 w-screen">
        <ul className="flex flex-col">
          {regionArray.length > 0 ? (
            regionArray.map((region, i) => (
              <SearchedList
                key={i}
                address={region.address_name}
                place={region.place_name}
              />
            ))
          ) : (
            <RecordList
              keywords={keywords}
              onClearKeywords={onClearKeywords}
              onRemoveKeyword={onRemoveKeyword}
            />
          )}
        </ul>
      </div>
    </>
  );
};

export default RegionSearch;
