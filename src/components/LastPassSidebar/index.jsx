import classnames from "classnames";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./last-pass-sidebar.css";

const proptypes = {
  options: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired
};

const LastPassSidebar = ({ options, onClick }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!activeId) {
      const [firstOption] = options;
      onClick(firstOption);
      setActiveId(firstOption.id);
    }
  }, [onClick, activeId, options]);

  return (
    <div className="last-pass-sidebar">
      {options.map(option => (
        <span
          className={classnames({
            "last-pass-sidebar-elements": true,
            "last-pass-sidebar-elements--active": activeId === option.id
          })}
          onClick={() => {
            setActiveId(option.id);
            onClick(option);
          }}
        >
          <i className={`last-pass-icon last-pass-icon--${option.id}`}></i>
          <p>{option.name}</p>
        </span>
      ))}
    </div>
  );
};
LastPassSidebar.propTypes = proptypes;
export default LastPassSidebar;
