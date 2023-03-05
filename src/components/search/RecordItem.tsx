import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { setDataAction } from "../../store/modules/search";

interface RecordItemProp {
  keyword: {
    text: string;
    id: number;
  };
  onRemoveKeyword: (id: number) => void;
}

const RecordItem = ({ keyword, onRemoveKeyword }: RecordItemProp) => {
  const useKeyword = useAppSelector((state) => state.search);
  const useDispatcher = useDispatch();

  const onClickItem = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.currentTarget.innerText);
    const keyword = e.currentTarget.innerText;
    useDispatcher(setDataAction({ keyword }));
    console.log(useKeyword.keyword);
  };

  return (
    <li className="flex justify-between p-3 pr-4 text-xl font-bold">
      <span onClick={onClickItem}>{keyword.text}</span>
      <button
        type="button"
        className="mr-3"
        onClick={() => {
          onRemoveKeyword(keyword.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default RecordItem;
