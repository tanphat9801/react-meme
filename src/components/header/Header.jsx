import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import ModalBtn from "../category/Category";
import HeaderSearch from "./HeaderSearch";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import Avatar from "../../shared/Avatar";
import { actLogout } from "../../stores/Auth/action";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.Auth.currentUser);
  const category = useSelector((state) => state.Category.hashCategory);
  const handleUpload = (e) => {
    e.preventDefault();
    history.push("/post");
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actLogout());
    history.push("/");
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
              <ModalBtn categories={category} />

              <span className="spacing"></span>

              <Button name="header" onClick={handleUpload}>
                Upload
              </Button>

              <span className="spacing"></span>
              {currentUser ? (
                <li className="user-info">
                  <div className="user-avatar">
                    <Avatar
                      src={currentUser.avatar}
                      alt={currentUser.nickName}
                    />
                  </div>
                  <Link to="/">{currentUser.nickName}</Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile-user">Profile</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
