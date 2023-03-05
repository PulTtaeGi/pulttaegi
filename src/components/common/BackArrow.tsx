import { useNavigate } from "react-router";
import backIcon from "../../assets/icons/back.png";

const BackArrow = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="fixed  top-0 flex items-center left-0 pt-7 pl-4 justify-start">
      <button onClick={() => navigate(-1)}>
        <img
          src={backIcon}
          alt="backButton"
          className="w-[22px] h-[22px]"
        ></img>
      </button>
    </div>
  );
};

export default BackArrow;
