import React from 'react';
import '../../assets/scss/Contact.scss';
import { Row, Col } from 'antd';
import imgLeft from '../../assets/img/contactColLeft.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div className="contact">
            <section ><Header /></section>
            <section className="contact-body">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                        <Col className="col-form" xs={24} sm={24} md={12}>
                            <form>
                                <h1>Work globally, Stay locally</h1>
                                <p>A career with us is like no other – experience working with a global team while staying remotely in Vietnam.</p>
                                <div className="form-inner-item">
                                    <label>Name</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-inner-item">
                                    <label>Email Address</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-inner-item">
                                    <label>Company</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-footer">
                                    <p>Any follow up action regarding my request to build a technical team enquiry</p>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </Col>
                        <Col className="col-img" xs={0} sm={0} md={12}>
                            <div className="col-img-wrap">
                                <img src={imgLeft} alt="col left"/>
                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
            <section ><Footer /></section>
        </div>
    )
}

export default Contact
