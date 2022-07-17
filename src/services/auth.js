import { api } from "./api";

export const authService = {
  login(email, password) {
    return api.call().post("/member/login.php", {
      email,
      password,
    });
  },
};
