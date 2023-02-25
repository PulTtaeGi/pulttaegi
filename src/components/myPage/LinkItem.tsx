import { Link } from "react-router-dom";

const LinkItem = ({ text, link }: { text: string, link: string }): JSX.Element => {
  return (
    <Link to={link}>
      <div className="flex flex-row justify-between text-3xl font-semibold mt-10">
        <p>{text}</p>
        <p> &gt; </p>
      </div>
    </Link>
  );
};

export default LinkItem;
