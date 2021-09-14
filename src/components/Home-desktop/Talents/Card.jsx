import { Skeleton } from "antd";
import React from "react";

function Card({ photo, title, content, loading }) {
  return (
    <div className="card-container " >{loading?<div style={{padding: 30, minWidth: 260}} className="card" id="bb"><Skeleton active/></div>:
      <div className="card" id="bb">
        <div className="card-img-top">
          <img src={photo} alt="" />
        </div>
        <div className="card-body">
          <div className="c-h5-title c-h5-title--maintain card-title">{title}</div>
          <div className="c-p-subtitle  card-text">{content}</div>
        </div>
      </div>}
    </div>
  );
}

export default Card;
