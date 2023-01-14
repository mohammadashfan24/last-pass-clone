import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import LastPassButton from "../LastPassButton/index";
import LastPassCard from "../LastPassCard";
import { login } from "../../utils/authentication";
import AuthInput from "../AuthInput";
import "./authentication.css";

const propTypes = {
  choseRegister: PropTypes.func.isRequired,
  loginComplete: PropTypes.func.isRequired
};

const renderLogo = () => {
  return (
    <div className="logo">
      <span className="logo__last">Last</span>
      <span className="logo__pass">Pass...</span>
    </div>
  );
};

const renderTitle = choseRegister => {
  return (
    <div className="authentication-form__title">
      <div className="authentication-form__title__login">LOG IN</div>
      <div className="authentication-form__title__or">OR</div>
      <button
        className="authentication-form__title__option"
        type="button"
        onClick={choseRegister}
      >
        CREATE AN ACCOUNT
      </button>
    </div>
  );
};

const AuthenticationLogin = ({ choseRegister, loginComplete }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoginActive = useMemo(() => {
    return email.trim() && password.trim();
  }, [email, password]);

  return (
    <LastPassCard className="last-pass-card-authentication">
      <div className="authentication-form">
        {renderLogo()}

        {renderTitle(choseRegister)}

        <div className="authentication-form__row">
          <AuthInput
            error="Please enter a valid email address"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="authentication-form__row">
          <AuthInput
            error="Please enter a password"
            label="Master Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div className="authentication-form__row">
          <LastPassButton
            label="LOGIN"
            className={classnames({
              "last-pass-button--round-corner": true,
              "last-pass-button--disabled": !isLoginActive
            })}
            disabled={!isLoginActive}
            onClick={() => {
              login({ email, password }).then(data => {
                const { token } = data;
                window.localStorage.setItem("token", token);
                loginComplete();
              });
            }}
          />
        </div>
      </div>
    </LastPassCard>
  );
};

AuthenticationLogin.propTypes = propTypes;
export default AuthenticationLogin;
