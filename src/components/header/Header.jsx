import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import ModalBtn from "../category/Category";
import HeaderSearch from "./HeaderSearch";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleUpload = (e) => {
    e.preventDefault();
    history.push("/post");
  };
  return (
    <>
      <header>
        <div className="ass1-header">
          <div className="container">
            <Link to="/" className="ass1-logo">
              TCL Meme
            </Link>
            <div className="ass1-header__search">
              <HeaderSearch />
            </div>
            <div className="header-btn">
              <ModalBtn />
              <span className="spacing"></span>
              <Button name="header" onClick={handleUpload}>
                Upload
              </Button>
              <span className="spacing"></span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
