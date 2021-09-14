import React from "react";
import "../../../assets/css/homepageHeader.scss";
import TextField from "./TextField";
import imageGroup from "../../../assets/img/Group 5169003.png";
import { Skeleton } from "@material-ui/lab";
function HomepageHeader({ loading }) {
  return (
    <div className="hompage__header">
      <div className="homepage__header__inner c-page-header__inner row">
        <div className="hompage__header__image-group col-lg-6">
          {loading ? (
            <Skeleton
              variant="rect"
              width="540px"
              height="540px"
              style={{ borderRadius: "12px", maxHeight: "100vw" }}
            />
          ) : (
            <img src={imageGroup} alt="" />
          )}
        </div>
        <div className="homepage__header__left col-lg-6">
          {loading ? (
            <Skeleton className="c-title c-h1-title" variant="text" />
          ) : (
            <div className=" c-h1-title homepage__header__h1 ">
              Smoother recruiting begins with Fetch
            </div>
          )}
          {loading ? (
            <div style={{marginBottom: 24}}>
              <Skeleton className="c-h6-title" />
              <Skeleton className="c-h6-title" />
              <Skeleton className="c-h6-title" />
            </div>
          ) : (
            <div className="c-h6-title hompage__header__small-text">
              Hiring and managing your offshore staff need not be complicated.
              Build your remote dream team effortlessly and let Fetch take care
              of the HR side of business.
            </div>
          )}
         {loading?<Skeleton className="skeleton--button" height="54px"/>:<button
            className="c-large-button homepage__header__signup-button"
            style={{ width: 123 }}
          >
            <span>Learn more</span>{" "}
          </button>}
        </div>
      </div>
    </div>
  );
}

export default HomepageHeader;
