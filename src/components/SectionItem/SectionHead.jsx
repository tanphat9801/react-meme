import { Link } from "react-router-dom";
import Avatar from "../../shared/Avatar";

const SectionHead = ({ avatar, date, name, authorLink }) => {
  return (
    <>
      <div className="ass1-section__head">
        <Link to={authorLink} className="ass1-section__avatar ass1-avatar">
          <Avatar src={avatar} alt={name} />
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
