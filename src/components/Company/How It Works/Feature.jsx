import { Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Feature({ icon, title, backgroundColor, color, destination, loading, animation }) {
  return (
    <div
      className="how-it-works__feature" data-aos={animation}
      style={{ backgroundColor: backgroundColor, marginBottom: 27 }}
    >
      {loading?<Skeleton></Skeleton>:<>
      <div className="how-it-works__feature__icon">
        <img src={icon} alt="" />
      </div>
      <Link to={destination?destination:"/404"}>
        <div className="how-it-works__feature__title" style={{ color: color }}>
          {title}
        </div>
      </Link>
      </>}
    </div>
  );
}

export default Feature;
