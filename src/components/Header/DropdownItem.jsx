import React from "react";

function DropdownItem({ icon, title, text }) {
  return (
    <div className="header__dropdown-item" role="button">
      <div className="header__dropdown-item__inner">
        <div className="header__dropdown-item__icon-container">
          {icon&&<div
            className="header__dropdown-item__icon"
            style={{
              backgroundImage: `url(${icon})`,
            }}
          ></div>}
        </div>
        <div className="header__dropdown-item__content">
          <div className={text?"header__dropdown-item__title":"header__dropdown-item__title c-light-text"}>{title}</div>
          <div className="header__dropdown-item__text">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
