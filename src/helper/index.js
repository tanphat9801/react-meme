export default function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name);
}

export const mappingPostData = (post) => {
  return {
    id: post.USERID,
    content: post.post_content,
    date: post.time_added,
    name: post.fullname,
    avatar: post.profilepicture,
    count: post.count,
    image: post.url_image,
  };
};

export const validateForm = ({ value, name }) => {
  let error = "";

  if (name === "email" && !value) {
    error = "username khong duoc rong";
  }

  if (name === "password") {
    if (!value) error = "password khong duoc rong";
    else if (value.length < 6) error = "password phai co it nhat 6 ki tu ";
  }

  return error;
};

export const parseJwt = (token) => {
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};
