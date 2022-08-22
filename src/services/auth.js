import { api } from "./api";

export const authService = {
  login(email, password) {
    return api.call().post("/member/login.php", {
      email,
      password,
    });
  },
  register({ fullname, email, password, repassword }) {
    return api.call().post("/member/register.php", {
      email,
      fullname,
      password,
      repassword,
    });
  },
  changePass({ token, oldPassword, newPassword, reNewPassword }) {
    return api.call().post(
      "/member/password.php",
      {
        oldPassword,
        newPassword,
        reNewPassword,
      },
      { headers: { Authorization: "Bearer " + token } }
    );
  },
  fetchMe(userid, token) {
    return api.call().get("/member/member.php", {
      params: {
        userid,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
