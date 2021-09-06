import React from "react";

function Card({ photo, title, content }) {
  return (
    <div className="car-container">
      <div className="card">
        <div className="card-img-top">
          <img src={photo} alt="" />
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
