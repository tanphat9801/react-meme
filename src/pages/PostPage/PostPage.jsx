import { useSelector } from "react-redux";
import Button from "../../shared/Button/Button";
import "./../../assets/images/no_image_available.jpg";
const PostPage = () => {
  const category = useSelector((state) => state.Category.categories);
  console.log(category);
  return (
    <>
      <main>
        <div className="container">
          {/*sections*/}
          <div className="row">
            <div className="col-lg-8">
              {/*section*/}
              <div className="ass1-section ass1-section__edit-post">
                <div className="ass1-section__content">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control ttg-border-none"
                        placeholder="https://"
                        style={{ margin: "0 0 10px 0" }}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control ttg-border-none"
                        placeholder="Mô tả ..."
                        defaultValue={""}
                      />
                    </div>
                  </form>
                  <div className="ass1-section__image">
                    <a href="/">
                      {/* <img
                        src=""
                        alt="default"
                      /> */}
                    </a>
                  </div>
                  <div className="meme-btn">
                    <Button
                      name="meme-btn"
                      href="https://memeful.com/"
                      target="_blank"
                    >
                      Chế ảnh từ meme
                    </Button>
                    <span className="spacing"></span>
                    <Button type="submit">Đăng ảnh từ máy tính</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="ass1-aside ass1-aside__edit-post">
                <div>
                  <Button loading>Đăng bài</Button>
                </div>
                <div className="ass1-aside__edit-post-head">
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    Chọn danh mục
                  </span>
                  {category.map((categoryItem) => {
                    return (
                      <label className="ass1-checkbox" key={categoryItem.id}>
                        <input type="checkbox" name="state-post" />
                        <span />
                        <p>{categoryItem.text}</p>
                      </label>
                    );
                  })}
                </div>
                <div className="ass1-aside__get-code">
                  <p>Share Link</p>
                </div>
                <div className="ass1-aside__social">
                  <a
                    href="/"
                    className="ass1-btn-social__facebook ass1-btn-social"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    href="/"
                    className="ass1-btn-social__twitter ass1-btn-social"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a
                    href="/"
                    className="ass1-btn-social__google ass1-btn-social"
                  >
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostPage;
