import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./last-pass-input.css";

const defaultProps = {
  className: "",
  placeholder: "",
  type: "text"
};

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

const LastPassInput = ({ className, value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      className={classnames({
        "last-pass-input": true,
        [className]: className
      })}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

LastPassInput.defaultProps = defaultProps;
LastPassInput.propTypes = propTypes;
export default LastPassInput;
