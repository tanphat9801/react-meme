import FooterHome from "./FooterHome";
import SectionFeel from "./SectionFeel";
import SectionFooter from "./SectionFooter";
import SectionHead from "./SectionHead";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";

const SectionItem = ({
  isShowHead = false,
  isShowTitle = false,
  isShowFooter = false,
  isShowFeel = false,
  isShowFooterHome = false,
  isShowImage = false,
  post,
}) => {
  if (!post) {
    return null;
  }

  const { content, name, avatar, image, count, date, id } = post;

  const authorLink = "/user/" + id;

  return (
    <>
      {isShowHead && (
        <SectionHead
          avatar={avatar}
          date={date}
          name={name}
          authorLink={authorLink}
        />
      )}
      <div className="ass1-section__content">
        {isShowTitle && <SectionTitle content={content} />}
        {isShowImage && <SectionImage image={image} />}
      </div>
      {isShowFooter && <SectionFooter />}
      {isShowFooterHome && <FooterHome count={count} />}
      {isShowFeel && <SectionFeel />}
    </>
  );
};

export default SectionItem;
