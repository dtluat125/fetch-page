import React from "react";
import Theme2 from "../../../assets/img/Theme2.png";
import "../../../assets/css/fetchHelp.css";
import CheckedItem from "../../Home-desktop/USP/CheckedItem";
function FetchHelp() {
  return (
    <div className="fetch-help">
      <div
        className="fetch-help__theme row"
        style={{ backgroundImage: `url(${Theme2})` }}
      >
        <div className="fetch-help__theme__left col-xl-6">
          <div className="fetch-help__theme__quote c-text">
            “Fetch helped our businesses run more efficiently”
          </div>
          <div className="fetch-help__theme__author c-text">
            Alison Harrington, <br />
            Ruby On Rails Developer
          </div>
        </div>
        <div className="fetch-help__theme__right col-xl-6">
          <div className="fetch-help__theme__rec">
            <div className="fetch-help__theme__rec__big-num c-text">400%</div>
            <div className="subtitle-text fetch-help__theme__rec-subtitle c-text">
              We’re Experienced
            </div>
            <div className="subtitle-text--small fetch-help__theme__rec-subtitle--small c-text">
              Being one of the first in the industry has allowed us to gain a
              strong grasp of the Vietnamese market.
            </div>
          </div>
        </div>
      </div>
      <div className="fetch-help__inner">
        <div className="fetch-help__title">
          Fetch helps businesses run more efficiently
        </div>
        <div className="fetch-help__checked-group row">
          <div className="col-md-6">
            <CheckedItem />
            <CheckedItem />
          </div>
          <div className="col-md-6">
            <CheckedItem />
            <CheckedItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchHelp;
