import React, { useState } from "react";
import "../../assets/scss/Contact.scss";
import { Row, Col } from "antd";
// import imgLeft from '../../assets/img/contactColLeft.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Select } from "antd";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { toastError, toastInformSuccess } from "../../util/toast.js";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const purposeArr = [
    "default",
    "I’m a business owner wanting to know about fetch services",
    "I’m a business owner wanting to know about fetch services 2",
    "I’m a business owner wanting to know about fetch services 3",
  ];
  const [purpose, setPurpose] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePurposeChange = (value) => {
    setPurpose(value);
  };

  const clearState = () => {
    setPurpose(1);
    setName("");
    setEmail("");
    setCompany("");
  };

  const handleSubmitContactInfo = async (e) => {
    e.preventDefault();
    const domain = "https://api.fetch.tech";
    const data = {
      name: name,
      email: email,
      company: company,
      purpose: purposeArr[purpose],
    };

    try {
      setIsLoading(true);
      const response = await axios.post(`${domain}/api/mail/build-team`, data);
      //console.log(response);
      if (response) {
        toastInformSuccess(
          "Message successfully sent, please wait for our contact!"
        );
        setIsLoading(false);
      }
      clearState();
    } catch (err) {
      //console.log(err);
      toastError("Message cannot be sent!");
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <ToastContainer />
      <Header />
      <section className="contact-body">
        <div className="cus-container">
          <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="center">
            <Col className="col-form" xs={24} sm={24} md={20} lg={12}>
              <form onSubmit={handleSubmitContactInfo}>
                <h1>We’re more than the words you’ve read so far</h1>
                <p>
                  It doesn’t matter what you require. Just select the right
                  option in our form and we will take it from there!{" "}
                </p>
                <div className="form-inner-item">
                  <label>Purpose of message</label>
                  <Select
                    className="select-purpose"
                    defaultValue="1"
                    onChange={handlePurposeChange}
                    value={purposeArr[purpose]}
                  >
                    {purposeArr.map((purpose, index) => {
                      if (index === 0) return <></>;
                      return (
                        <Select.Option value={index}>
                          {purpose}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </div>
                <div className="form-inner-item">
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="E.g John Micheal Doe"
                    value={name}
                    onChange={(e) => setName(e?.target?.value || "")}
                  />
                </div>
                <div className="form-inner-item">
                  <label>Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="yourcompany@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value || "")}
                  />
                </div>
                <div className="form-inner-item">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    value={company}
                    onChange={(e) => setCompany(e?.target?.value || "")}
                  />
                </div>
                <div className="form-footer">
                  <p>
                    Any follow up action regarding my request to build a
                    technical team enquiry
                  </p>
                  <div className="form-footer-button">
                    <input type="submit" value="Submit" disabled={isLoading} />
                    {isLoading && (
                      <CircularProgress className="loading-icon" size={20} />
                    )}
                  </div>
                </div>
              </form>
            </Col>
            <Col className="col-img" xs={0} sm={0} md={12}>
              {/* <div className="col-img-wrap">
                                <img src={imgLeft} alt="col left"/>
                            </div> */}
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
