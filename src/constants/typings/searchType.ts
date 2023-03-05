export interface KeywordType {
  text: string;
  id: number;
}
export interface RecordProps {
  keywords: KeywordType[];
  onRemoveKeyword: (id: number) => void;
  onClearKeywords: () => void;
}
