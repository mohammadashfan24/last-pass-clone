import PropTypes from "prop-types";
import React from "react";
import LastPassCard from "../LastPassCard";
import LastPassButton from "../LastPassButton";
import "./last-pass-category-item.css";

const propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};
const LastPassCategoryItem = ({ item, onDelete, onEdit }) => {
  return (
    <LastPassCard className="last-pass-card--hover">
      <div>
        <div className="last-pass-category__title">
          <div
            className="last-pass-category__title__icon"
            style={{ backgroundImage: `url(${item.site})` }}
          />
          <div className="last-pass-category__title__name">
            <h1>{item.name}</h1>
          </div>
        </div>
        <div className="last-pass-category__link">
          <span>{item.name}</span>
        </div>
      </div>
      <div className="button-class">
        <div className="button-class-launch">
          <LastPassButton
            className="last-pass-button--launch"
            label="Launch"
            onClick={() => {
              const a = document.createElement("a");
              a.href = item.site;
              a.target = "_blank";
              a.click();
            }}
          ></LastPassButton>
        </div>
        <LastPassButton
          className="last-pass-button--edit"
          onClick={() => {
            onEdit(item);
          }}
        ></LastPassButton>
        <LastPassButton
          className="last-pass-button--delete"
          onClick={() => {
            onDelete(item._id);
          }}
        />
      </div>
    </LastPassCard>
  );
};

LastPassCategoryItem.propTypes = propTypes;
export default LastPassCategoryItem;
