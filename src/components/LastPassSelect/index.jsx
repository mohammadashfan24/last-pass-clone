import classnames from "classnames";
import propTypes from "prop-types";
import React from "react";
import "./last-pass-select.css";

const defaultProps = {
  options: [],
  onChange: () => {},
  value: null
};

const proptypes = {
  options: propTypes.array,
  onChange: propTypes.func,
  value: propTypes.string
};

const LastPassSelect = ({ options, onChange, value, className }) => {
  return (
    <select
      className={classnames({
        "last-pass-select": true,
        [className]: className
      })}
      value={value}
      onChange={e => {
        const selectedOption = options.find(
          option => option.value === e.target.value
        );
        onChange(selectedOption);
      }}
    >
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}

      {!options.length && <option disabled>select option</option>}
    </select>
  );
};

LastPassSelect.defaultProps = defaultProps;
LastPassSelect.propTypes = proptypes;
export default LastPassSelect;
