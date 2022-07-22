import cls from "classnames";
import IconLoading from "../IconLoading";
const Button = ({
  type,
  children,
  name,
  loading,
  loadingPos = "left",
  onClick,
  htmlType,
  ab,
  ...restProps
}) => {
  const classes = cls(
    {
      "ass1-header__btn-upload": name === "header",
      "load-more": name === "loadmore",
      "ass1-btn-meme": name === "post-btn",
    },
    "ass1-btn"
  );

  const content = (
    <>
      {loading && loadingPos === "left" && <IconLoading width="1em" />}
      {children}
      {loading && loadingPos === "right" && <IconLoading width="1em" />}
    </>
  );

  const _onClick = (evt) => {
    if (!loading) {
      onClick && onClick(evt);
    }
  };

  const injectedProps = {
    className: classes,
    type: htmlType,
    onClick: _onClick,
    ...restProps,
  };

  if (ab === "a") {
    return (
      <>
        <a {...injectedProps}>{content}</a>
      </>
    );
  }
  return (
    <>
      <button {...injectedProps}>{content}</button>
    </>
  );
};

export default Button;
