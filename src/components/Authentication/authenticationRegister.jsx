import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useMemo } from "react";
import LastPassButton from "../LastPassButton/index";
import LastPassCard from "../LastPassCard";
import { register } from "../../utils/authentication";
import AuthInput from "../AuthInput";
import "./authentication.css";

const propTypes = {
  choseRegister: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
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
      <div className="authentication-form__title__login">CREATE AN ACCOUNT</div>
      <div className="authentication-form__title__or">OR</div>
      <button
        className="authentication-form__title__option"
        type="button"
        onClick={choseRegister}
      >
        LOG IN
      </button>
    </div>
  );
};

const AuthenticationRegister = ({ choseRegister, setUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isRegisterActive = useMemo(() => {
    return (
      firstName.trim() && lastName.trim() && email.trim() && password.trim()
    );
  }, [firstName, lastName, email, password]);

  return (
    <LastPassCard className="last-pass-card-authentication">
      <div className="authentication-form">
        {renderLogo()}

        {renderTitle(choseRegister)}

        <div className="authentication-form__row">
          <AuthInput
            error="Please enter first name"
            label="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="authentication-form__row">
          <AuthInput
            error="Please enter last name"
            label="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

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
            label="REGISTER"
            className={classnames({
              "last-pass-button--round-corner": true,
              "last-pass-button--disabled": !isRegisterActive
            })}
            disabled={!isRegisterActive}
            onClick={() => {
              register({ firstName, lastName, email, password }).then(data => {
                choseRegister();
              });
            }}
          />
        </div>
      </div>
    </LastPassCard>
  );
};

AuthenticationRegister.propTypes = propTypes;
export default AuthenticationRegister;
