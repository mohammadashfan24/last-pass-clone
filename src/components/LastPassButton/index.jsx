import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./LastPassButton.css";

const defaultProps = {
  className: "",
  onClick: () => {}
};

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

const LastPassButton = ({ className, label, onClick }) => {
  return (
    <button
      className={classnames({
        "last-pass-button": true,
        [className]: className
      })}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};
LastPassButton.defaultProps = defaultProps;
LastPassButton.propTypes = propTypes;
export default LastPassButton;
