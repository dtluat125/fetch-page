import React from "react";

function DropdownItem({ icon, title, text }) {
  return (
    <div className="header__dropdown-item">
      <div className="header__dropdown-item__inner">
        <div className="header__dropdown-item__icon-container">
          <div
            className="header__dropdown-item__icon"
            style={{
              backgroundImage: `url(${icon})`,
            }}
          ></div>
        </div>
        <div className="header__dropdown-item__content">
          <div className="header__dropdown-item__title">{title}</div>
          <div className="header__dropdown-item__text">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
