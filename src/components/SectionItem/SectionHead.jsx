import { Link } from "react-router-dom";
import { DEAFAULT_AVT } from "../../constants";

const SectionHead = ({ avatar, date, name, authorLink }) => {
  return (
    <>
      <div className="ass1-section__head">
        <Link to={authorLink} className="ass1-section__avatar ass1-avatar">
          <img src={avatar || DEAFAULT_AVT} alt={name} />
        </Link>
        <div>
          <Link to={authorLink} className="ass1-section__name">
            {name}
          </Link>
          <span className="ass1-section__passed">{date}</span>
        </div>
      </div>
    </>
  );
};

export default SectionHead;
