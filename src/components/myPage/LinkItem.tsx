const LinkItem = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className="flex flex-row justify-between text-3xl font-semibold mt-10">
      <p>{text}</p>
      <p> &gt; </p>
    </div>
  );
};

export default LinkItem;
