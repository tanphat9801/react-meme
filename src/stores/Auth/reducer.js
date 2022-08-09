import { ACCES_TOKEN, ID } from "../../constants";
import { ACT_LOGIN_SUCCESS, ACT_LOGOUT } from "./action";

const initState = {
  currentUser: null,
  userid: "",
  token: localStorage.getItem(ACCES_TOKEN),
};

const reducer = (authState = initState, action) => {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      localStorage.setItem(ID, action.payload.userid);
      localStorage.setItem(ACCES_TOKEN, action.payload.token);
      return {
        currentUser: action.payload.users,
        userid: action.payload.userid,
        token: action.payload.token,
      };
    case ACT_LOGOUT:
      localStorage.removeItem(ID);
      localStorage.removeItem(ACCES_TOKEN);
      return {
        currentUser: null,
        userid: "",
        token: "",
      };
    default:
      return authState;
  }
};

export default reducer;
