import { parseJwt } from "../../helper";
import { authService } from "../../services/auth";

export const ACT_LOGIN_SUCCESS = "ACT_LOGIN_SUCESS";

export const actLoginSuccess = ({ user, token }) => {
  return {
    type: ACT_LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
};

export const actFetchMeAsync = ({ userid, token }) => {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe({ userid, token });
      const user = response.data;
      dispatch(actLoginSuccess({ user, token }));
      return {
        check: true,
      };
    } catch (error) {
      return {
        check: false,
        error: "Username hoặc password không hợp lệ",
      };
    }
  };
};

export const actLoginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await authService.login(email, password);
      const token = response.data.token;
      const jwt = parseJwt(token);
      const userid = jwt.id;
      await dispatch(actFetchMeAsync({ userid, token }));

      if (response.data.status === 200) {
        return {
          check: true,
        };
      }

      return {
        check: false,
        error: response.data.error,
      };
    } catch (err) {
      return {
        check: false,
        error: "Username hoặc password không hợp lệ",
      };
    }
  };
};
