import classnames from "classnames";
import React, { useState } from "react";
import "./last-pass-header.css";
import PropTypes from "prop-types";
import LastPassInput from "../LastPassInput";
import LastPassCard from "../LastPassCard";
import { useSelector } from "react-redux";

const proptypes = {
  logout: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

const LastPassHeader = ({ logout, onSearch }) => {
  const user = useSelector(state => state.user);
  const [active, setActive] = useState();
  const [search, setSearch] = useState("");

  return (
    <div className="last-pass-header">
      <div className="last-pass-header__search-box">
        <span>Last Pass... |</span>
        <div className="last-pass-header__search-icon"></div>
        <div className="last-pass-header__search-bar">
          <div>
            <LastPassInput
              className="last-pass-input--search"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                onSearch(e.target.value);
              }}
              placeholder="Search My Vault"
            />
          </div>
        </div>
      </div>

      <div
        className="last-pass-header__profile"
        tabIndex={0}
        onMouseLeave={() => {
          setActive(false);
        }}
        onClick={() => {
          setActive(true);
        }}
      >
        <div className="last-pass-header__icon" />
        <div className="last-pass-header__profile__email">
          {user && user.email}
        </div>
        <div className="last-pass-header-arrow"></div>
        <LastPassCard
          className={classnames({
            "last-pass-header__profile__options": true,
            "last-pass-header__profile__options--active": active
          })}
        >
          <button
            className="last-pass-header__profile__option"
            type="button"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </LastPassCard>
      </div>
    </div>
  );
};

LastPassHeader.propTypes = proptypes;
export default LastPassHeader;
