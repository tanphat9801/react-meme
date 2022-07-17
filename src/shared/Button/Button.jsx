import cls from "classnames";
import IconLoading from "../IconLoading";
const Button = ({
  type,
  children,
  name,
  loading,
  loadingPos = "left",
  onClick,
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

  if (ab === "a") {
    return (
      <>
        <a
          type={type}
          className={classes}
          name={name}
          onClick={onClick}
          {...restProps}
        >
          {loading && loadingPos === "left" && <IconLoading width="1em" />}
          {children}
          {loading && loadingPos === "right" && <IconLoading width="1em" />}
        </a>
      </>
    );
  }
  return (
    <>
      <button
        type={type}
        className={classes}
        name={name}
        onClick={onClick}
        {...restProps}
      >
        {loading && loadingPos === "left" && <IconLoading width="1em" />}
        {children}
        {loading && loadingPos === "right" && <IconLoading width="1em" />}
      </button>
    </>
  );
};

export default Button;
