import React from 'react';
import '../../assets/scss/Contact.scss';
import { Row, Col } from 'antd';
import imgLeft from '../../assets/img/contactColLeft.png';

const Contact = () => {
    return (
        <div className="contact">
            <section style={{padding: '20px'}} >header waiting</section>
            <section className="contact-body">
                <div className="cus-container">
                    <Row gutter={30}>
                        <Col className="col-form" span={12}>
                            <form>
                                <h1>Work globally, Stay locally</h1>
                                <p>A career with us is like no other – experience working with a global team while staying remotely in Vietnam.</p>
                                <div className="form-inout-item">
                                    <label>Name</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-inout-item">
                                    <label>Email Address</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-inout-item">
                                    <label>Company</label>
                                    <input type="text" placeholder="usergoogle@gmail.com" />
                                </div>
                                <div className="form-footer">
                                    <p>Any follow up action regarding my request to build a technical team enquiry</p>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </Col>
                        <Col className="col-img" span={12}>
                            <div className="col-img-wrap">
                                <img src={imgLeft} alt="col left"/>
                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
            <section style={{padding: '20px'}} >footer waiting</section>
        </div>
    )
}

export default Contact
