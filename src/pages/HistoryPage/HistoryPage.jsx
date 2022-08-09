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
                  <img src="images/cat-1634369_1920.jpg" alt="" />
                </a>
              </div>
              <div className="ass1-head-user__info">
                <div className="ass1-head-user__info-head">
                  <div className="ass1-head-user__name">
                    <span>{data.nickName}</span>
                  </div>
                  <div className="w-100" />
                  <Link
                    href="/"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Theo dõi
                  </Link>
                  <Link
                    to="/change-password"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Đổi mật khẩu
                  </Link>
                  <Link
                    to="/profile"
                    className="ass1-head-user__btn-follow ass1-btn"
                  >
                    Profile
                  </Link>
                  {/* <a href="/" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
                </div>
                <div className="ass1-head-user__info-statistic">
                  <div className="ass1-btn-icon">
                    <i className="icon-Post" />
                    <span>Bài viết: 9999</span>
                  </div>
                  <div className="ass1-btn-icon">
                    <i className="icon-Followers" />
                    <span>Theo dõi: 99999</span>
                  </div>
                  <div className="ass1-btn-icon">
                    <i className="icon-Following" />
                    <span>Đang theo dõi: 999</span>
                  </div>
                  {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
