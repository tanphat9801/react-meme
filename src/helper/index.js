import { MESSAGE_FORM_ERROR } from "../constants";

export default function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name);
}

export const mappingCurrentUser = (users) => {
  return {
    id: users.user.USERID,
    nickName: users.user.fullname,
    avatar: users.user.profilepicture,
  };
};

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

//validate form register

export const validateFormEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateFormRegister = ({ name, value }) => {
  let error = "";
  if (name === "email") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    } else if (!validateFormEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  } else if (name === "nickname" && !value) {
    error = MESSAGE_FORM_ERROR.username_required;
  } else if (name === "password") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  } else if (name === "repassword") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  }
  return error;
};

//hashCategory

// export const handleHashCategory = (categories) => {
//   const hashObj = {};

//   categories.forEach((categoryItem) => {
//     const key = categoryItem.id;
//     hashObj[key] = {
//       name: categoryItem.text,
//       id: categoryItem.id,
//     };
//   });

//   return hashObj;
// };
