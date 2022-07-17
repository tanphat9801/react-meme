import { authService } from "../../services/auth";

export const actLoginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await authService.login(email, password);
      console.log("check response ", response);
    } catch (err) {
      return {
        check: false,
        error: "username hoac password ko hop le ",
      };
    }
  };
};
