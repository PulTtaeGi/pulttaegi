import BackArrow from "./BackArrow";

function ResultBox({ text }: { text: string }) {
  return (
    <div className="fixed z-10 bg-slate-50 top-0 w-screen h-20 flex items-center border-stone-300 border-b-2 font-bold text-2xl pl-9">
      <BackArrow />
      <span className="ml-4">{text}</span>
    </div>
  );
}

export default ResultBox;
