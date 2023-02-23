import { useEffect, useState } from "react";
import FoodSearch from "./FoodSearch";
import { KeywordType, SEARCH_COOKIE } from "./RecordList";
import RegionSearch from "./RegionSearch";
import SearchInput from "./SearchInput";

const SearchBar = ({ isRegion }: { isRegion: boolean }): JSX.Element => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem(SEARCH_COOKIE) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(SEARCH_COOKIE, JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword: KeywordType) => {
      return keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  const hanldeAllClear = () => {
    setKeywords([]);
    localStorage.clear();
  };
  return (
    <div>
      {isRegion ? (
        <>
          <SearchInput
            placehoderText="지역명을 입력해주세요."
            onAddKeyword={handleAddKeyword}
          />
          <RegionSearch
            keywords={keywords}
            onClearKeywords={hanldeAllClear}
            onRemoveKeyword={handleRemoveKeyword}
          />
        </>
      ) : (
        <>
          <SearchInput
            placehoderText="음식명을 입력해주세요."
            onAddKeyword={handleAddKeyword}
          />
          <FoodSearch
            keywords={keywords}
            onClearKeywords={hanldeAllClear}
            onRemoveKeyword={handleRemoveKeyword}
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
