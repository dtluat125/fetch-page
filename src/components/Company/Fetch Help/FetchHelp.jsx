import React, { useEffect, useState } from "react";
import Theme2 from "../../../assets/img/Theme2.png";
import UpArrow from "../../../assets/img/UpArrow.png";
import DownArrow from "../../../assets/img/DownArrow.png";
import "../../../assets/css/fetchHelp.css";
import CheckedItem from "../../Home-desktop/USP/CheckedItem";
import { Col, Row, Skeleton } from "antd";
import SkeletonImage from "antd/lib/skeleton/Image";

function FetchHelp({ loading }) {
  const [collapseDropdown, setCollapseDropdown] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) setCollapseDropdown(true);
      else setCollapseDropdown(false);
    };
    changeNav();
    window.addEventListener("resize", changeNav);
  });
  return (
    <div className="fetch-help">
      <div
        className="fetch-help__theme row"
        style={{ backgroundImage: `url(${Theme2})` }}
      >
        <div className="fetch-help__theme__left col-md-7">
          {loading ? (
            <Skeleton active />
          ) : (
            <>
              <div className="fetch-help__theme__quote c-h2-title">
                "We maximised Chartdesk's budget to help build a small yet
                effective team of developers."
              </div>
              <div
                className="fetch-help__theme__author c-h6-subtitle"
                style={{ color: "#FFFFFF" }}
              >
                Chartdesk
              </div>
            </>
          )}
        </div>
        <div className="fetch-help__theme__right col-md-5">
          {loading ? (
            <Skeleton
              style={{ width: "100%", height: "100%" }}
              active
              className="fetch-help__theme__rec"
            />
          ) : (
            <div className="fetch-help__theme__rec">
              <div className="fetch-help__theme__rec__big-num c-text">80%</div>
              <div className="fetch-help__theme__rec-subtitle c-text c-h5-title c-h5-title--maintain">
                saved in expenses
              </div>
              <div className="subtitle-text--small fetch-help__theme__rec-subtitle--small c-text">
                since moving part of their operations to Vietnam for the same
                output quality and time they would have spent locally.
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fetch-help__inner">
        <div className="fetch-help__checked-group ant-row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <CheckedItem
              title="The impacts"
              subtitle="Chartdesk is today up and running with multiple international clients using their product."
              loading={loading}
            />
            <CheckedItem
              title="Conclusion"
              subtitle="Fetch is able to help startups scale up and build their tech team in a affordable manner"
              loading={loading}
            />
          </div>

          <div className="col-md-6">
            <div
              className={collapseDropdown ? "c-divide-line" : "collapse"}
            ></div>
            <Col
              className={
                collapseDropdown ? "fetch-help__collapse-toggle" : "collapse"
              }
              role={collapseDropdown && "button"}
              data-bs-toggle={collapseDropdown && "collapse"}
              data-bs-target="#ChartDesk-info"
              aria-expanded="false"
              aria-controls="ChartDesk-info"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>About Chart Desk</span>
              <img width={16} height={8} src={DownArrow} alt="" />
            </Col>
            {loading ? (
              <Skeleton />
            ) : (
              <Col
                id="ChartDesk-info"
                className={collapseDropdown && "collapse"}
              >
                <Col
                  className={
                    collapseDropdown
                      ? "fetch-help__title c-collapse"
                      : "fetch-help__title"
                  }
                >
                  ChartDesk is a shared inbox—built for teams to efficiently
                  manage business emails exchanged with shared mailboxes
                </Col>
                <div className="ChartDesk-info c-p-subtitle">
                  Back in 2016, Chartdesk was a relatively new startup. Being a
                  new startup, the high cost of tech talents in Singapore was
                  simply out of their reach. They needed a low cost solution to
                  build up their tech capabilities.
                </div>
              </Col>
            )}
            <div
              className={collapseDropdown ? "c-divide-line" : "collapse"}
            ></div>
            <div
              className={
                collapseDropdown ? "fetch-help__collapse-toggle" : "collapse"
              }
              role={collapseDropdown && "button"}
              data-bs-toggle={collapseDropdown && "collapse"}
              data-bs-target="#how-we-tackle"
              aria-expanded="false"
              aria-controls="how-we-tackle"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>How we tackled</span>

              <img width={16} height={8} src={DownArrow} alt="" />
            </div>
            {loading ? (
              <Skeleton />
            ) : (
              <div
                className="how-we-tackle"
                id="how-we-tackle"
                className={
                  collapseDropdown ? "how-we-tackle collapse" : "how-we-tackle"
                }
              >
                <div className="c-h5-title">How we tackled</div>
                <div className="c-p-subtitle">
                  Fetch was able to help chartdesk leverage on the much lower
                  cost in Vietnam to help Chartdesk build a small but high
                  impact team of developers to build their product
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchHelp;
