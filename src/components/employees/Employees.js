import React, { useState } from 'react';
import '../../assets/scss/Employees.scss';
import FrameUsp from '../../assets/img/FrameUsp.png';
import {ReactComponent as Tick15 } from '../../assets/img/tick15.svg';
import uspBLbanner from '../../assets/img/Group 5169.png'
import avt1 from '../../assets/img/avt1.png';
import avt2 from '../../assets/img/avt2.png';
import bannerEmployees from '../../assets/img/bannerEmployees.png';
import findMore from '../../assets/img/findMore.png';
import heart from '../../assets/img/heart.png';
import { Row, Col, Skeleton } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Employees = () => {

    return (
        <div className="employees">
            <Header />
            <section className="employees-banner">
                <SkeletonHOC 
                    active
                    paragraph={{rows: 10, width: "100%"}} 
                    title={{width: "100%"}}
                    render={(setLoading) => (
                        <div className="cus-container-fluid banner-wrap">
                            <img 
                                onLoad={() => setLoading(false)}
                                src={bannerEmployees} 
                                alt="banner-employees"
                            />
                        </div>
                    )}
                />
            </section>
            <section className="employees-header">
                <div className="cus-container">
                    <Row gutter={[{xs: 21, sm: 24, xl:30}, 0]} justify="center">
                        <Col xs={24} sm={24} lg={16} xl={16} className="reach-further">
                            <h1>Work globally, stay locally</h1>
                            <h6>
                                Experience the world without stepping out of Vietnam. Get unrestricted international exposure while applying your expertise from the comforts of home with Fetch.
                            </h6>
                            <button className="btn-learn-more">Learn More</button>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-career-fetch">
                <div className="cus-container">
                    <Row className="career-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]} align="middle">
                        <Col xs={24} sm={24} lg={12} xl={12}>
                            <div className="left-wrap">
                                <h1>Why build your career with Fetch?</h1>
                                <p>It's simple, Fetch cares. We are committed to nurturing every employee to be the best developer they can be. To provide you with the right tools and opportunities to a global audience, expanding their horizons beyond Vietnam.</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} lg={12} xl={12}>
                            <ul className="list-wrap">
                                <li>
                                    <div className="head">
                                        <span>1</span>
                                    </div>
                                    <div className="content">
                                        <h5>Greater opportunities</h5>
                                        <p>Work in various organisations that allow you to learn and cultivate your skills.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="head">
                                        <span>2</span>
                                    </div>
                                    <div className="content">
                                        <h5>Attractive stipend</h5>
                                        <p>Be compensated fairly – enjoy a remuneration that reflects your talents.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="head">
                                        <span>3</span>
                                    </div>
                                    <div className="content">
                                        <h5>Professional growth </h5>
                                        <p>Our employees are highly sought after and enjoy career prospects spanning multiple levels.</p>
                                    </div>
                                </li>
                                <div className="horizontal-line"></div>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-usp usp-top">
                <div className="cus-container">
                    <Row className="row-top" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="usp-col-top-left col-6-text" xs={24} sm={24} md={12}>
                            <div className="col-6-wrap">
                                <h1>Fetch lets you to grow from where you are</h1>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h5>Gain global exposure from home</h5>
                                        <p>Experience working with international organisations without stepping outside of Vietnam.</p>
                                    </div>
                                </div>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h5>Develop and enhance your craft</h5>
                                        <p>Expand your opportunities and hone your expertise to forge a stronger career path.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="usp-col-top-right" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <SkeletonHOC 
                                    active
                                    paragraph={{rows: 10, width: "100%"}} 
                                    title={{width: "100%"}}
                                    render={(setLoading) => <img onLoad={() => setLoading(false)} src={FrameUsp} alt="FrameUsp" />}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-usp usp-bottom">
                <div className="cus-container">
                    <Row className="row-bottom" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="usp-col-bt-left" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <SkeletonHOC 
                                    active
                                    paragraph={{rows: 10, width: "100%"}} 
                                    title={{width: "100%"}}
                                    render={(setLoading) => <img onLoad={() => setLoading(false)} src={uspBLbanner} alt="FrameUsp" />}
                                />
                            </div>
                        </Col>
                        <Col className="usp-col-bt-right col-6-text" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <h1>Every member of the Fetch community is valued</h1>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h5>Get comprehensive healthcare</h5>
                                        <p>Fetch employees are entitled to health insurance with medical expenses covered.</p>
                                    </div>
                                </div>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <span>
                                            <Tick15 />
                                        </span>
                                    </div>
                                    <div>
                                        <h5>Explore our range of benefits</h5>
                                        <p>We provide all employees with a personal laptop, as well as perks like a fully-stocked pantry and a weekly sports program.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-find-out-more">
                <div className="cus-container">
                    <Row className="row-find" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="space-between">
                        <Col xs={24} sm={24} md={8} xl={8} className="left-col">
                            <div className="left-wrap">
                                <h3>In search of a career instead?</h3>
                                <h5>A career with Fetch is like no other</h5>
                                <p>Pursue your profession with us today</p>
                                <button>Find out more</button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} xl={12}>
                            <div className="right-wrap">
                                <SkeletonHOC 
                                    active
                                    paragraph={{rows: 10, width: "100%"}} 
                                    title={{width: "100%"}}
                                    render={(setLoading) => <img onLoad={() => setLoading(false)} src={findMore} alt="find more" />}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-member">
                <div className="cus-container">
                    <Row className="first-row" justify="center" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="first-row-col-center" xs={24} sm={24} md={20} xl={12}>
                            <img src={heart} alt="heart"/>
                            <h1>150+</h1>
                            <h2>associates and growing</h2>
                            <p>You don't just play a role on our client's team. First and foremost, you are a part of the Fetch family. As a valued member of our community, you stand to enjoy bonuses like company trips and more.</p>
                            <button>Learn more</button>
                        </Col>
                    </Row>
                    <Row className="second-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <div className="cmt-wrap">
                                <SkeletonHOC 
                                    active
                                    paragraph={{rows: 3, width: "100%"}} 
                                    title={{width: "100%"}}
                                    render={(setLoading) => <img onLoad={() => setLoading(false)} src={avt1} alt="avt"/>}
                                />
                                <div className="cmt">
                                    <p>“I’ve been working at Fetch for some years. Not only do I tackle meaningful challenges and projects, I also get to enjoy valuable team-bonding sessions through company dinners and activities that allow me to exchange and learn new skills with my coworkers.”</p>
                                    <p className="signal">
                                        David Edelson,<br/>
                                        Front-End Developer
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <div className="cmt-wrap">
                                <SkeletonHOC 
                                    active
                                    paragraph={{rows: 3, width: "100%"}} 
                                    title={{width: "100%"}}
                                    render={(setLoading) => <img onLoad={() => setLoading(false)} src={avt2} alt="avt"/>}
                                />
                                <div className="cmt">
                                    <p>“I just graduated from college and I’m glad to be able to begin my employment with Fetch. I get the opportunity of working with a global team while still living in Vietnam. This allows me to broaden my horizon without having to making additional expenses such as rent in a foreign country.”</p>
                                    <p className="signal">
                                        Alison Harrington,<br/>
                                        Ruby On Rails Developer
                                    </p>
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
                            <h3>Build your career with Fetch</h3>
                            <h6>Join our team of talented and like-minded individuals and let your aspirations soar today.</h6>
                        </Col>
                        <Col className="col-btn" xs={24} sm={24} md={6} xl={4}>
                            <div className="btn-wrap">
                                <Link to="/contact">
                                    <button>Contact us</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Employees;

const SkeletonHOC = ({ active, render, paragraph, title }) => {
    const [loading, setLoading] = useState(true);

    return (
        <React.Fragment>
            <Skeleton 
                loading={loading} 
                active={active} 
                paragraph={paragraph} 
                title={title}
            />
            {render(setLoading)}
        </React.Fragment>
    )
}