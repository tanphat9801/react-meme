import { ACT_LOGIN_SUCCESS } from "./action";

const initState = {
  token: "",
  currentUser: null,
};

const reducer = (authState = initState, action) => {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      localStorage.setItem("actk", action.payload.token)
      return {
        token: action.payload.token,
        currentUser: action.payload.user,
      };
    default:
      return authState;
  }
};

export default reducer;
