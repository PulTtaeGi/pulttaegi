interface RecordItemProp {
  keyword: {
    text: string;
    id: number;
  };
  onRemoveKeyword: (id: number) => void;
}

const RecordItem = ({ keyword, onRemoveKeyword }: RecordItemProp) => {
  return (
    <li className="flex justify-between p-3 pr-4 text-xl font-bold">
      <span>{keyword.text}</span>
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
