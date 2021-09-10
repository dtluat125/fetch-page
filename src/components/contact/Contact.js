import React from 'react';
import '../../assets/scss/Contact.scss';
import { Row, Col } from 'antd';
// import imgLeft from '../../assets/img/contactColLeft.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Select } from 'antd';

const Contact = () => {
    return (
        <div className="contact">
            <Header />
            <section className="contact-body">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="center">
                        <Col className="col-form" xs={24} sm={24} md={20} lg={12}>
                            <form>
                                <h1>We’re more than the words you’ve read so far</h1>
                                <p>It doesn’t matter what you require. Just select the right option in our form and we will take it from there! </p>
                                <div className="form-inner-item">
                                    <label>Purpose of message</label>
                                    <Select className="select-purpose" defaultValue="1">
                                        <Select.Option value="1">I’m a business owner wanting to know about fetch services</Select.Option>
                                        <Select.Option value="2">I’m a business owner wanting to know about fetch services 2</Select.Option>
                                        <Select.Option value="3">I’m a business owner wanting to know about fetch services 3</Select.Option>
                                    </Select>
                                </div>
                                <div className="form-inner-item">
                                    <label>Name</label>
                                    <input type="text" placeholder="E.g John Micheal Doe" />
                                </div>
                                <div className="form-inner-item">
                                    <label>Email Address</label>
                                    <input type="text" placeholder="yourcompany@gmail.com" />
                                </div>
                                <div className="form-inner-item">
                                    <label>Company</label>
                                    <input type="text" placeholder="YourCompany" />
                                </div>
                                <div className="form-footer">
                                    <p>Any follow up action regarding my request to build a technical team enquiry</p>
                                    <input type="submit" value="Submit" />
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
            <section ><Footer /></section>
        </div>
    )
}

export default Contact
