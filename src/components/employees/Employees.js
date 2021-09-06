import React from 'react';
import '../../assets/scss/Employees.scss';
import Group5169011 from '../../assets/img/Group 5169011.png';
import Group5169010 from '../../assets/img/Group 5169010.png';
import Group5169009 from '../../assets/img/Group 5169009.png';
import FrameUsp from '../../assets/img/FrameUsp.png';
import {ReactComponent as Tick15 } from '../../assets/img/tick15.svg';
import uspBLbanner from '../../assets/img/Group 5169033.png'
import avt1 from '../../assets/img/avt1.png';
import avt2 from '../../assets/img/avt2.png';
import { Row, Col } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Employees = () => {
    return (
        <div className="employees">
            <Header/>
            <section className="employees-header">
                <div className="cus-container">
                    <Row gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col xs={24} sm={24} lg={12} xl={12} className="reach-further">
                            <h1>Reach further with fetch</h1>
                            <p>
                                No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!
                            </p>
                            <button className="btn-join-our-team">Join Our Team</button>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-how-it-work">
                <div className="cus-container">
                    <div className="employees-how-it-work-header">
                        <h1>How it works</h1>
                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market</p>
                    </div>
                    <Row className="row-icon-3" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col xs={24} sm={24} md={8} >
                            <div className="wrap-icon">
                                <img src={Group5169011} alt="English Proficiency" />
                            </div>
                            <p className="icon-title">English Proficiency</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        </Col>
                        <Col xs={24} sm={24} md={8} >
                            <div className="wrap-icon">
                                <img src={Group5169010} alt="Coding Challenge" />
                            </div>
                            <p className="icon-title">Coding Challenge</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        
                        </Col>
                        <Col xs={24} sm={24} md={8} >
                            <div className="wrap-icon">
                                <img src={Group5169009} alt="Coding Challenge" />
                            </div>
                            <p className="icon-title">Technical Interview</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        
                        </Col>
                        <div className="horizontal-line"></div>
                    </Row>
                </div>
            </section>
            <section className="employees-usp">
                <div className="cus-container-fluid">
                    <Row className="row-top" gutter={0}>
                        <Col className="usp-col-top-left" xs={24} sm={24} md={12}>
                            <div className="col-6-wrap">
                                <h1>Global Exposure working with foreign companies</h1>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h3>We’re Experienced</h3>
                                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                    </div>
                                </div>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h3>We’re Experienced</h3>
                                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="usp-col-top-right" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <img src={FrameUsp} alt="FrameUsp" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-bottom" gutter={0}>
                        <Col className="usp-col-bt-left" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <img src={uspBLbanner} alt="" />
                            </div>
                        </Col>
                        <Col className="usp-col-bt-right" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <Row className="row-cus" gutter={[{xs: 21, sm: 24, xl:30}, 0]} >
                                    <Col className="col-10-cus" xs={24} sm={24} md={20} >
                                        <div className="col-10-wrap">
                                            <h1>Fetch and it’s amazing benefits and perks</h1>
                                            <p className="describe">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                            <ul>
                                                <li>
                                                    <span>
                                                        <Tick15 />
                                                    </span>
                                                    <p>13 Month Bonus</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Tick15 />
                                                    </span>
                                                    <p>Monthly company retreat</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Tick15 />
                                                    </span>
                                                    <p>Daily lunches provided</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-member">
                <div className="cus-container">
                    <Row className="first-row" justify="center" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="first-row-col-center" xs={24} sm={24} md={20} xl={12}>
                            <h1>500+</h1>
                            <h2>Members of the Fetch family</h2>
                            <p>No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!</p>
                        </Col>
                    </Row>
                    <Row className="second-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <div className="cmt-wrap">
                                <img src={avt1} alt="avt"/>
                                <div className="cmt">
                                    <p>I did not have a college degree, or any experience in tech, but i had decades of customer focus from working in retail. I had real-world business experience. And I was fairly technicial for somone who didn’t work in tech.”</p>
                                    <p className="signal">
                                        David Edelson,<br/>
                                        Front-End Developer
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <div className="cmt-wrap">
                                <img src={avt2} alt="avt"/>
                                <div className="cmt">
                                    <p>I feel grateful that fetch advocated for me to expand my horizons and strive to achieve more, not only in my career but in education as well.</p>
                                    <p className="signal">
                                        Alison Harrington,<br/>
                                        Ruby On Rails Developer
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="third-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]} justify="center">
                        <Col className="col-10" xs={24} sm={24} md={20}>
                            <div className="view-role-wrap">
                                <div className="wrap-text">
                                    <h2>At fetch, we are family</h2>
                                    <p>No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!</p>
                                </div>
                                <div className="wrap-btn">
                                    <button>View Roles</button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-join">
                <div className="cus-container">
                    <Row justify="center" gutter={[{xs: 21, sm: 24, xl:30}, {xs: 32, sm: 32}]}>
                        <Col className="col-text" xs={24} sm={24} md={18} xl={20}>
                            <h2>Join Our Team Now!</h2>
                            <p>Be part of our growing network of satisfied partners</p>
                        </Col>
                        <Col className="col-btn" xs={24} sm={24} md={6} xl={4}>
                            <div className="btn-wrap">
                                <button>Join Our Team</button>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
            <section style={{marginTop: '80px'}}>footer</section>
            <Footer/>
        </div>
    )
}

export default Employees
