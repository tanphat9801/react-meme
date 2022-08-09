import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const useNotAutheticated = () => {
  const history = useHistory();
  const isAuthoticated = useSelector((state) => Boolean(state.Auth.token));

  useEffect(() => {
    if (isAuthoticated) {
      history.push("/");
    }
  }, [isAuthoticated, history]);
};
