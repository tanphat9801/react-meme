import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionItem from "../../components/SectionItem";

const HistoryPage = () => {
  const data = useSelector((state) => state.Auth.currentUser) || {};

  return (
    <>
      <main>
        <div className="container">
          <div className="ass1-head-user">
            <div className="ass1-head-user__content">
              <div className="ass1-head-user__image">
                <a href="/">
                  <img src={data.avatar} alt="" />
                </a>
              </div>
              <div className="ass1-head-user__info">
                <div className="ass1-head-user__info-head">
                  <div className="ass1-head-user__name">
                    <span>{data.nickName}</span>
                  </div>
                  <div className="w-100" />
                  <Link
                    to="/change-password"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Change Password
                  </Link>
                  <Link
                    to="/edit-profile"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Edit Profile
                  </Link>
                  {/* <a href="/" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
                </div>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          {/*sections*/}
          <div className="ass1-section__wrap row ass1-section__isotope-init">
            {/*section*/}
            <div
              className="gri
            d-sizer"
            />
            <div className="ass1-section__item col-lg-6">
              <div className="ass1-section">
                <SectionItem isShowHead isShowTitle isShowImage isShowFooter />
              </div>
            </div>
            <div className="ass1-section__item col-lg-6">
              <div className="ass1-section">
                <SectionItem isShowHead isShowTitle isShowImage isShowFooter />
              </div>
            </div>
            <div className="ass1-section__item col-lg-6">
              <div className="ass1-section">
                <SectionItem isShowHead isShowTitle isShowImage isShowFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoryPage;
