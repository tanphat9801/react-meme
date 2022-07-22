import { api } from "./api";

export const authService = {
  login(email, password) {
    return api.call().post("/member/login.php", {
      email,
      password,
    });
  },
  fetchMe({ userid, token }) {
    console.log(userid);
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
