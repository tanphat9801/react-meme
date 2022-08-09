import { ACCES_TOKEN, ID } from "../../constants";
import { mappingCurrentUser, parseJwt } from "../../helper";
import { authService } from "../../services/auth";

export const ACT_LOGIN_SUCCESS = "ACT_LOGIN_SUCESS";
export const ACT_LOGOUT = "ACT_LOGOUT";

export const actLogout = () => {
  return {
    type: ACT_LOGOUT,
  };
};

export const actLoginSuccess = (users, userid, token) => {
  return {
    type: ACT_LOGIN_SUCCESS,
    payload: {
      users,
      userid,
      token,
    },
  };
};

export const actFetchMeAsync = (userid, token) => {
  if (userid === undefined && token === undefined) {
    userid = localStorage.getItem(ID);
    token = localStorage.getItem(ACCES_TOKEN);
  }
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(userid, token);
      const users = mappingCurrentUser(response.data);
      dispatch(actLoginSuccess(users, userid, token));
      return {
        check: true,
      };
    } catch (error) {
      dispatch(actLogout);
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
      await dispatch(actFetchMeAsync(userid, token));

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

export const actRegisterAsync = ({ email, fullname, password, repassword }) => {
  return async (dispatch) => {
    try {
      const response = await authService.register({
        fullname,
        email,
        password,
        repassword,
      });

      const responseLogin = await dispatch(actLoginAsync(email, password));

      if (response.data.status === 200 && responseLogin.check) {
        return {
          check: true,
        };
      }
      return {
        check: false,
        error: response.data.error,
      };
    } catch (error) {
      return {
        check: false,
        error: error,
      };
    }
  };
};
