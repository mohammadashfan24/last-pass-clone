import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import "./last-pass-accordion.css";

const defaultProps = {
  className: "",
  isOpen: false
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool
};

const LastPassAccordion = ({ children, className, label, isOpen }) => {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, children]);

  useEffect(() => {
    if (open) {
      bodyRef.current.style.minHeight = `${bodyRef.current.scrollHeight}px`;
    } else {
      bodyRef.current.style.minHeight = "unset";
    }
  }, [open]);

  return (
    <div
      className={classnames({
        "last-pass-accordion": true,
        [className]: className
      })}
    >
      <button
        className="last-pass-accordion__head"
        onClick={() => {
          setOpen(() => !open);
        }}
      >
        <p className="last-pass-accordion__label">{label}</p>
        <div
          className={classnames({
            "last-pass-accordion__arrow": true,
            "last-pass-accordion__arrow--up": open
          })}
        />
      </button>
      <div
        className={classnames({
          "last-pass-accordion__body": true,
          "last-pass-accordion__body--open": open
        })}
        ref={bodyRef}
      >
        {children}
      </div>
    </div>
  );
};

LastPassAccordion.defaultProps = defaultProps;
LastPassAccordion.propTypes = propTypes;
export default LastPassAccordion;
