import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./last-pass-text-area.css";

const defaultprops = {
  className: "",
  placeholder: ""
};

const proptype = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

const LastPassTextArea = ({ value, className, onChange, placeholder }) => {
  return (
    <textarea
      className={classnames({
        "last-pass-text-area": true,
        [className]: className
      })}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    ></textarea>
  );
};

LastPassTextArea.defaultProps = defaultprops;
LastPassTextArea.propTypes = proptype;
export default LastPassTextArea;
