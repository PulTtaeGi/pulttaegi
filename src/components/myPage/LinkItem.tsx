import { Link } from "react-router-dom";
import LinkIcon from "../../assets/icons/pngegg.png";

const LinkItem = ({
  text,
  link,
}: {
  text: string;
  link: string;
}): JSX.Element => {
  return (
    <Link to={link}>
      <div className="flex flex-row items-center justify-between text-3xl font-semibold mt-10">
        <p>{text}</p>
        <img src={LinkIcon} style={{ width: "30px", height: "30px" }}></img>
      </div>
    </Link>
  );
};

export default LinkItem;
