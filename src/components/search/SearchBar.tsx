import FoodSearch from "./FoodSearch";
import RegionSearch from "./RegionSearch";
import SearchInput from "./SearchInput";

const SearchBar = ({ isRegion }: { isRegion: boolean }): JSX.Element => {
  return (
    <div>
      {isRegion ? (
        <>
          <SearchInput placehoderText="지역명을 입력해주세요." />
          <RegionSearch />
        </>
      ) : (
        <>
          <SearchInput placehoderText="음식명을 입력해주세요." />
          <FoodSearch />
        </>
      )}
    </div>
  );
};

export default SearchBar;
