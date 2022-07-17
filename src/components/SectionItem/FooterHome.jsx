const FooterHome = ({ count }) => {
  return (
    <>
      <div className="ass1-section__footer">
        <a href="/" className="ass1-section__btn-comment ass1-btn-icon">
          <i className="icon-Comment_Full" />
          <span>{count}</span>
        </a>
      </div>
    </>
  );
};

export default FooterHome;
