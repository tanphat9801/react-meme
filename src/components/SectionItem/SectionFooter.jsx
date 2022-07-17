const SectionFooter = () => {
  return (
    <>
      <div className="ass1-section__footer">
        <a href="/" className="ass1-section__btn-upvote ass1-btn-icon">
          <i className="icon-Upvote" />
        </a>
        <a href="/" className="ass1-section__btn-downvote ass1-btn-icon">
          <i className="icon-Downvote" />
        </a>
        {/* <a href="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
        <a href="/" className="ass1-section__btn-like ass1-btn-icon">
          <i className="icon-Favorite_Full" />
          <span>1,274</span>
        </a>
        <a href="/" className="ass1-section__btn-comment ass1-btn-icon">
          <i className="icon-Comment_Full" />
          <span>982</span>
        </a>
      </div>
    </>
  );
};

export default SectionFooter;
