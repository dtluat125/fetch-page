import React from "react";
import { useState } from "react";

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
  const [toggle, setToggle] = useState(true);
  return (
    <div
      role={"button"}
      onClick={() => setTimeout(setToggle(!toggle), 1000)}
      id={id}
      className={
        dropdownCollapse ? "menu-item menu-collapse-toggle" : "menu-item"
      }
      data-bs-toggle={
        dropdownToggle ? "dropdown" : dropdownCollapse ? "" : ""
      }
      data-bs-target={"#" + target}
      aria-expanded={dropdownCollapse ? 'true' : "false"}
      // aria-controls={target}
      style={theme ? { fontFamily: "Gilroy-Medium" } : {}}
    >
      {title}
      {icon && <img className="menu-icon" src={icon} alt="" />}
    </div>
  );
}

export default MenuItem;
