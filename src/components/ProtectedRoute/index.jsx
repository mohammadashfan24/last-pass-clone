import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils/authentication";
import { LOGIN } from "../../constants/routes";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn()) {
          return <Component {...props} />;
        } else {
          return <Redirect to={LOGIN} />;
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
