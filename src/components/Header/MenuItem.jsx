import React from "react";

function MenuItem({
  title,
  position,
  iconPosition,
  groupPosition,
  icon,
  dropdownToggle,
  id,
}) {
  return (
    <div
      role={"button"}
      id={id}
      className={dropdownToggle ? "menu-item" : "menu-item"}
      data-bs-toggle={dropdownToggle && "dropdown"}
      aria-expanded="false"
    >
      {title}
      {icon&&<img className="menu-icon" src={icon} alt="" />}
    </div>
  );
}

export default MenuItem;
