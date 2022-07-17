import SectionItem from "../../components/SectionItem";

const DetailPage = () => {
  return (
    <>
      <main>
        <div className="container">
          {/*sections*/}
          <div className="row">
            <div className="col-lg-8">
              {/*section*/}
              <div className="ass1-section__list">
                <div className="ass1-section">
                  <SectionItem
                    isShowHead
                    isShowTitle
                    isShowImage
                    isShowFooter
                    isShowFeel
                  />
                </div>
                <div className="ass1-add-comment">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control ttg-border-none"
                      placeholder="Thêm một bình luận"
                    />
                  </form>
                  <div className="ass1-add-comment__content">
                    <a
                      href="/"
                      className="ass1-add-comment__btn-save ass1-btn-icon"
                    >
                      <span>180</span>
                      <i className="icon-Submit_Tick" />
                    </a>
                  </div>
                </div>
                <div className="ass1-comments">
                  <div className="ass1-comments__head">
                    <div className="ass1-comments__title">214 Bình luận</div>
                    <div className="ass1-comments__options">
                      <span>Sắp xếp theo:</span>
                      <a
                        href="/"
                        className="ass1-comments__btn-upvote ass1-btn-icon"
                      >
                        <i className="icon-Upvote" />
                      </a>
                      <a
                        href="/"
                        className="ass1-comments__btn-down ass1-btn-icon"
                      >
                        <i className="icon-Downvote" />
                      </a>
                      <a
                        href="/"
                        className="ass1-comments__btn-expand ass1-btn-icon"
                      >
                        <i className="icon-Expand_all" />
                      </a>
                    </div>
                  </div>
                  {/*comment*/}
                  <div className="ass1-comments__section">
                    <a href="/" className="ass1-comments__avatar ass1-avatar">
                      <img src="images/avatar-02.png" alt="" />
                    </a>
                    <div className="ass1-comments__content">
                      <a href="/" className="ass1-comments__name">
                        Tây Tạng
                      </a>
                      <span className="ass1-comments__passed">
                        12 giờ trước
                      </span>
                      <p>
                        Scratch off globe, for when you want to wipe out any
                        country that displeases you but lack the weaponry to do
                        so.
                      </p>
                      <div className="ass1-comments__info">
                        <a
                          href="/"
                          className="ass1-comments__btn-upvote ass1-btn-icon"
                        >
                          <i className="icon-Upvote" />
                          <span>901</span>
                        </a>
                        <a
                          href="/"
                          className="ass1-comments__btn-down ass1-btn-icon"
                        >
                          <i className="icon-Downvote" />
                          <span>36</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*comment*/}
                  <div className="ass1-comments__section">
                    <a href="/" className="ass1-comments__avatar ass1-avatar">
                      <img src="images/avatar-11.png" alt="" />
                    </a>
                    <div className="ass1-comments__content">
                      <a href="/" className="ass1-comments__name">
                        Monster{" "}
                      </a>
                      <span className="ass1-comments__passed">3 giờ trước</span>
                      <a
                        href="/"
                        className="ass1-comments__btn-reply ass1-btn-icon"
                      >
                        <i className="icon-Reply">Trả lời</i>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Distinctio dolores officiis, ducimus veritatis
                        voluptatibus alias quos, magnam sed non quo hic mollitia
                        perferendis nostrum? Commodi reprehenderit nesciunt
                        saepe, libero et.
                      </p>
                      <div className="ass1-comments__info">
                        <a
                          href="/"
                          className="ass1-comments__btn-upvote ass1-btn-icon"
                        >
                          <i className="icon-Upvote" />
                          <span>901</span>
                        </a>
                        <a
                          href="/"
                          className="ass1-comments__btn-down ass1-btn-icon"
                        >
                          <i className="icon-Downvote" />
                          <span>36</span>
                        </a>
                        <a
                          href="/"
                          className="ass1-comments__btn-flag ass1-btn-icon"
                        >
                          <i className="icon-Flag" />
                        </a>
                      </div>
                      {/*comment*/}
                      <div className="ass1-comments__section">
                        <a
                          href="/"
                          className="ass1-comments__avatar ass1-avatar"
                        >
                          <img src="images/avatar-10.png" alt="" />
                        </a>
                        <div className="ass1-comments__content">
                          <a href="/" className="ass1-comments__name">
                            Bầu trời
                          </a>
                          <span className="ass1-comments__passed">
                            1 hour ago
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim debitis cumque nostrum blanditiis iusto
                            amet illo necessitatibus, ea quibusdam quidem quod,
                            doloribus, voluptatem est saepe nulla ex optio ut
                            quas.
                          </p>
                          <div className="ass1-comments__info">
                            <a
                              href="/"
                              className="ass1-comments__btn-upvote ass1-btn-icon"
                            >
                              <i className="icon-Upvote" />
                              <span>901</span>
                            </a>
                            <a
                              href="/"
                              className="ass1-comments__btn-down ass1-btn-icon"
                            >
                              <i className="icon-Downvote" />
                              <span>36</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*comment*/}
                      <div className="ass1-comments__section">
                        <a
                          href="/"
                          className="ass1-comments__avatar ass1-avatar"
                        >
                          <img src="images/avatar-10.png" alt="" />
                        </a>
                        <div className="ass1-comments__content">
                          <a href="/" className="ass1-comments__name">
                            Nguyễn A
                          </a>
                          <span className="ass1-comments__passed">
                            39 mins ago
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque voluptatibus distinctio possimus qui,
                            incidunt illum nesciunt ad! Cum hic pariatur, velit,
                            dignissimos ratione necessitatibus natus neque sed
                            esse, voluptatum ipsum.
                          </p>
                          <div className="ass1-comments__info">
                            <a
                              href="/"
                              className="ass1-comments__btn-upvote ass1-btn-icon"
                            >
                              <i className="icon-Upvote" />
                              <span>256</span>
                            </a>
                            <a
                              href="/"
                              className="ass1-comments__btn-down ass1-btn-icon"
                            >
                              <i className="icon-Downvote" />
                              <span>12</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*comment*/}
                  <div className="ass1-comments__section">
                    <a href="/" className="ass1-comments__avatar ass1-avatar">
                      <img src="images/avatar-14.png" alt="" />
                    </a>
                    <div className="ass1-comments__content">
                      <a href="/" className="ass1-comments__name">
                        Minh Minh
                      </a>
                      <span className="ass1-comments__passed">2 giờ trước</span>
                      <p>
                        Do not cook on the colorful fire!!! It is copper and
                        will kill you if you use for cooking!!!
                      </p>
                      <div className="ass1-comments__info">
                        <a
                          href="/"
                          className="ass1-comments__btn-upvote ass1-btn-icon"
                        >
                          <i className="icon-Upvote" />
                          <span>543</span>
                        </a>
                        <a
                          href="/"
                          className="ass1-comments__btn-down ass1-btn-icon"
                        >
                          <i className="icon-Downvote" />
                          <span>21</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                  <div>Bài viết gần đây.</div>
                </div>
                <div className="ass1-section">
                  <SectionItem isShowHead isShowTitle isShowFooter />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
