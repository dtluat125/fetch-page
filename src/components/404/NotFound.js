import { Row, Col } from "antd";
import React from "react";
import "../../assets/scss/NotFound.scss";
import img4042 from "../../assets/img/404-2.png";
import FetchYellow from "../../assets/img/FetchYellow.png";
import FetchRed from "../../assets/img/FetchRed.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <section className="not-found-body">
        <div className="cus-container">
          <div className="text-wrap">
            <h1>It’s a</h1>
          </div>
          <Row
            className="not-found-body-row-img"
            gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}
            justify="center"
          >
            <Col xs={24} sm={24} md={16}>
              <div className="img-wrap">
                <div className="img-inner">
                  <img className="img-404" src={img4042} alt="404" />
                  <img
                    className="fetch fetch-yellow"
                    src={FetchYellow}
                    alt="FetchYellow"
                  />
                  <img
                    className="fetch fetch-red"
                    src={FetchRed}
                    alt="FetchRed"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="not-found-body-row" gutter={30} justify="center">
            <Col xs={24} sm={24} md={12}>
              <h6>
                Oh no! The page you’re looking for is currently unavailable.
                Please try again later.
              </h6>
              <div className="btn-direct">
                <Link to = "../">
                  <button>Go Back</button>
                </Link>
                <Link to = "/">
                  <button>Go Home</button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
