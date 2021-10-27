import React from "react";

function MenuItem({
  title,
  position,
  iconPosition,
  groupPosition,
  icon,
  dropdownToggle,
  dropdownCollapse,
  id,
  target,
  isMobile,
  theme,
}) {
  return (
    <div
      role={"button"}
      id={id}
      className={
        dropdownCollapse
          ? isMobile
            ? "menu-item menu-collapse-toggle"
            : "menu-item menu-collapse-toggle collapsed"
          : "menu-item"
      }
      data-bs-toggle={
        dropdownToggle ? "dropdown" : dropdownCollapse && "collapse"
      }
      data-bs-target={"#" + target}
      aria-expanded="false"
      aria-controls={target}
      style={theme ? { fontFamily: "Gilroy-Medium" } : {}}
    >
      {title}
      {icon && <img className="menu-icon" src={icon} alt="" />}
    </div>
  );
}

export default MenuItem;
