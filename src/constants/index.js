export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ACCES_TOKEN = "actk";
export const ID = "id";
export const DEAFAULT_AVT =
  "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png";

export const MESSAGE_FORM_ERROR = {
  //backend error code
  existing_user_login: "Tên đăng nhập đã tồn tại",
  existing_user_email: "Email đã tồn tại",
  rest_user_invalid_password: "Mật khẩu không hợp lệ",
  rest_user_invalid_username: "Tên đăng nhập không hợp lệ",
  rest_user_invalid_email: "Email không hợp lệ",
  password_length: "Mật khẩu phải có ít nhất 6 kí tự",
  repassword_invalid: "Mật khẩu nhập lại không đúng ",

  // frontend error code

  email_required: "Email không được rỗng",
  password_required: "Password không được rỗng",
  username_required: "Tên đăng nhập không được rỗng",

  default: "Có lỗi xảy ra vui lòng thử lại",
};

export const supportedMimeType = ["image/png", "image/jpeg", "image/gif"];
