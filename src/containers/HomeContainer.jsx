import React, { useEffect, useCallback } from "react";
import Home from "../components/Home";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../redux/actions/user";
import { OPEN_MODAL } from "../redux/actions/modalActions";
import { getUser } from "../utils/home";
import { TOKEN_EXPIRED } from "../constants/statusCodes";

const HomeContainer = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const logout = useCallback(() => {
    window.localStorage.removeItem("token");
    history.push("/login");
  }, [history]);

  const openModal = useCallback(
    modal => {
      dispatch({ type: OPEN_MODAL, modal });
    },
    [dispatch]
  );

  useEffect(() => {
    getUser().then(data => {
      const { status } = data;
      if (status !== TOKEN_EXPIRED) {
        dispatch({ type: LOG_IN, payload: data });
      } else {
        logout();
      }
    });
  }, [dispatch, logout]);

  return user && <Home user={user} logout={logout} openModal={openModal} />;
};

export default HomeContainer;
