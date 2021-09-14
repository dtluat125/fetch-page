import { Skeleton } from "antd";
import React from "react";

function Slide({ photo, content, name, description, id, loading }) {
  return (
    <div className="slide-container" id = {id}>
      {loading?<div className="slide__inner" style={{minHeight: 500, padding: 40}}><Skeleton active></Skeleton></div>:
      <div className="slide__inner row">
        <div className="slide__photo-container">
          <div
            className="slide__photo-holder"
            
          ><img src={photo} alt="" /></div>
        </div>
        <div className="slide__content">
          <div className="slide__main-content">{content}</div>
          <div className="slide__info">
            <div className="slide__info-name">{name}</div>
            <div className="slide__info-description">{description}</div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Slide;
