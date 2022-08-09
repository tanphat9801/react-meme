import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionItem from "../../components/SectionItem";
import Button from "../../shared/Button/Button";
import { actListPostAsync } from "../../stores/Post/action";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Auth.currentUser) || {};

  const nickName = data.nickName;

  const { list: posts, currentPage } = useSelector(
    (state) => state.Post.listPaging
  );

  useEffect(() => {
    dispatch(actListPostAsync());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoading(true);
    dispatch(actListPostAsync({ currentPage: currentPage + 1 })).then(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <main>
        <div className="container">
          {/*sections*/}
          <div className="row">
            <div className="col-lg-8">
              <div className="ass1-section__list">
                {posts.map((post) => {
                  return (
                    <div className="ass1-section__item" key={post.id}>
                      <div className="ass1-section">
                        <SectionItem
                          isShowHead
                          isShowTitle
                          isShowImage
                          isShowFooterHome
                          post={post}
                        />
                      </div>
                    </div>
                  );
                })}
                <Button
                  name="loadmore"
                  loading={loading}
                  onClick={handleLoadMore}
                >
                  Xem thêm
                </Button>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                  <div>Bài viết gần đây của bạn.</div>
                </div>
                {nickName ? (
                  <div>Bài viết gần đây của {nickName}</div>
                ) : (
                  <div>
                    Vui lòng đăng nhập để xem nội dung này
                    <Link to="/login">Đăng nhập</Link>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
