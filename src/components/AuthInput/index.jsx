import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./auth-input.css";

const defaultProps = {
  className: "",
  error: "",
  placeholder: "",
  type: "text"
};

const propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

const AuthInput = ({
  className,
  error,
  label,
  value,
  onChange,
  placeholder,
  type
}) => {
  return (
    <div
      className={classnames({
        "auth-input": true,
        [className]: className
      })}
    >
      <input
        type={type}
        className="auth-input__control"
        onChange={onChange}
        value={value}
        required
      />
      <label className="auth-input__label">{label}</label>
      <div className="auth-input__error">{error}</div>
    </div>
  );
};

AuthInput.defaultProps = defaultProps;
AuthInput.propTypes = propTypes;
export default AuthInput;
