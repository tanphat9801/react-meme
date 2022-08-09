const Avatar = ({ src, alt }) => {
  return (
    <>
      <img
        style={{ borderRadius: "50%" }}
        src={src}
        alt={alt}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png";
        }}
      />
    </>
  );
};

export default Avatar;
