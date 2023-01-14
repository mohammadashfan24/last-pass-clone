import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./last-pass-card.css";

const defaultProps = {
  className: ""
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const LastPassCard = ({ children, className }) => {
  return (
    <div
      className={classnames({ "last-pass-card": true, [className]: className })}
    >
      {children}
    </div>
  );
};

LastPassCard.defaultProps = defaultProps;
LastPassCard.propTypes = propTypes;
export default LastPassCard;
