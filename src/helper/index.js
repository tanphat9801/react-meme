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

  if (name === "username" && !value) {
    error = "username khong duoc rong";
  }

  if (name === "password") {
    if (!value) error = "password khong duoc rong";
    else if (value.length < 6) error = "password phai co it nhat 6 ki tu ";
  }

  return error;
};
