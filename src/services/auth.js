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
