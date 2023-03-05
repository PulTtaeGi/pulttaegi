import { Link } from "react-router-dom";

const LinkItem = ({ text, link }: { text: string, link: string }): JSX.Element => {
  return (
    <Link to={link}>
      <div className="flex flex-row items-center justify-between text-3xl font-semibold mt-10">
        <p>{text}</p>
        <img src="../../src/assets/icons/pngegg.png" style={{width:"30px", height:"30px"}}></img>
      </div>
    </Link>
  );
};

export default LinkItem;
