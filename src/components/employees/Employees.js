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
import AnimationWrap from '../animation/AnimationWrap';

const careerData = [
    {id: 1, title: "Greater opportunities", subtitle: "Work in various organisations that allow you to learn and cultivate your skills."},
    {id: 2, title: "Attractive stipend", subtitle: "Be compensated fairly – enjoy a remuneration that reflects your talents."},
    {id: 3, title: "Professional growth", subtitle: "Our employees are highly sought after and enjoy career prospects spanning multiple levels."}
]

const Employees = () => {
    
    return (
        <div className="employees">
            <Header />
            <section className="employees-banner">
                <div className="cus-container-fluid banner-wrap">
                    <img 
                        src={bannerEmployees} 
                        alt="banner-employees"
                    />
                </div>
                {/* <SkeletonHOC 
                    active
                    paragraph={{rows: 10, width: "100%"}} 
                    title={{width: "100%"}}
                    render={(setLoading) => (
                    )}
                />       */}
            </section>

            <section className="employees-header">
                <div className="cus-container">
                    <Row gutter={[{xs: 21, sm: 24, xl:30}, 0]} justify="center">
                        <Col xs={24} sm={24} lg={16} xl={16} className="reach-further">
                            <AnimationWrap 
                                ratio={0.25}
                                ratioBack={-0.25}
                                render={(ref, animate) =>
                                    <div ref={ref} className={`animate__animated ${animate ? "animate__zoomIn" : ""}`}>
                                        <h1>Work globally, stay locally</h1>
                                        <h6 >
                                            Experience the world without stepping out of Vietnam. Get unrestricted international exposure while applying your expertise from the comforts of home with Fetch.
                                        </h6>
                                        <button className="btn-learn-more">Learn More</button>
                                    </div>     
                                }
                            />
                        </Col>
                    </Row>
                </div>
            </section>
             
            <section className="employees-career-fetch">
                <div className="cus-container">
                    <Row className="career-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]} align="middle">
                        <Col xs={24} sm={24} lg={12} xl={12}>
                            <div className="left-wrap">
                                <AnimationWrap 
                                    render={(ref, animate) => (
                                        <h1 ref={ref} className={`animate__animated animate__faster ${animate ? "animate__lightSpeedInLeft" : ""}`} >Why build your career with Fetch?</h1>
                                    )}
                                />
                                <AnimationWrap 
                                    render={(ref, animate) => (
                                        <p ref={ref} className={`animate__animated animate__fast ${animate ? "animate__lightSpeedInLeft" : ""}`} >It's simple, Fetch cares. We are committed to nurturing every employee to be the best developer they can be. To provide you with the right tools and opportunities to a global audience, expanding their horizons beyond Vietnam.</p>
                                    )}
                                />
                             </div>
                        </Col>
                        <Col xs={24} sm={24} lg={12} xl={12}>
                            <ul className={`list-wrap`}>
                                {careerData?.map(career => (
                                    <AnimationWrap 
                                        render={(ref, animate) => (
                                            <li ref={ref} className={`animate__animated animate__fast ${animate ? "animate__lightSpeedInRight" : ""}`} >
                                                <div className="head">
                                                    <span>{career?.id}</span>
                                                </div>
                                                <div className="content">
                                                    <h5>{career?.title}</h5>
                                                    <p>{career?.subtitle}</p>
                                                </div>
                                            </li>
                                        )}
                                    />
                                ))}
                                <AnimationWrap 
                                    ratio={1.1}
                                    render={(ref, animate) => (
                                        <div ref={ref} className={`horizontal-line animate__animated animate__slower ${animate ? "animate__flipInX" : ""}`}></div>
                                    )}
                                />
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
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <h1 ref={ref} className={animate && "animate__animated animate__fadeInLeft animate__faster"}>
                                        Fetch lets you to grow from where you are
                                    </h1>
                                )}
                            />
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div ref={ref} className={`achieve-item ${animate && "animate__animated animate__fadeInLeft animate__fast"}`}>
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
                                )}
                            />
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div ref={ref} className={`achieve-item ${animate && "animate__animated animate__fadeInLeft"}`}>
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
                                )}
                            />
                            </div>
                        </Col>
                        <Col className="usp-col-top-right" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                                <AnimationWrap
                                    ratio={0.5}
                                    ratioBack={0.4}
                                    render={(ref, animate) => 
                                        <img 
                                            ref={ref} 
                                            className={`${animate && "animate__animated animate__fadeInTopRight"}`}
                                            src={FrameUsp} 
                                            alt="FrameUsp" 
                                        />
                                    }
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
                                <AnimationWrap
                                    render={(ref, animate) => 
                                        <img 
                                            ref={ref} 
                                            className={`${animate && "animate__animated animate__fadeInTopLeft"}`}
                                            src={uspBLbanner} 
                                            alt="FrameUsp" 
                                        />
                                    }
                                />
                            </div>
                        </Col>
                        <Col className="usp-col-bt-right col-6-text" xs={24} sm={24} md={12} >
                            <div className="col-6-wrap">
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <h1 ref={ref} className={animate && "animate__animated animate__fadeInRight animate__faster"}>
                                        Every member of the Fetch community is valued
                                    </h1>
                                )}
                            />
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div ref={ref} className={`achieve-item ${animate && "animate__animated animate__fadeInRight animate__fast"}`}>
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
                                )}
                            />
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div ref={ref} className={`achieve-item ${animate && "animate__animated animate__fadeInRight"}`}>
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
                                )}
                            />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="employees-find-out-more">
                <div className="cus-container">
                    <Row className="row-find" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="space-between">
                        <Col xs={24} sm={24} md={8} xl={8} className="left-col">
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div 
                                        ref={ref}
                                        className={`left-wrap ${animate && "animate__animated animate__fadeInUp"}`}
                                    >
                                        <h3>In search of a career instead?</h3>
                                        <h5>A career with Fetch is like no other</h5>
                                        <p>Pursue your profession with us today</p>
                                        <button>Find out more</button>
                                    </div>
                                )}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={12} xl={12}>
                            <div className="right-wrap">
                                <AnimationWrap
                                    render={(ref, animate) => (
                                        <img 
                                            ref={ref}
                                            className={animate && "animate__animated animate__fadeInDown"}
                                            src={findMore} 
                                            alt="find more" 
                                        />
                                    )}
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
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <h1 
                                        ref={ref}
                                        className={animate && "animate__animated animate__bounceIn"} 
                                    >
                                     150+
                                    </h1>
                                )}
                            />
                            <h2>associates and growing</h2>
                            <p>You don't just play a role on our client's team. First and foremost, you are a part of the Fetch family. As a valued member of our community, you stand to enjoy bonuses like company trips and more.</p>
                            <button>Learn more</button>
                        </Col>
                    </Row>
                    <Row className="second-row" gutter={[{xs: 21, sm: 24, xl:30}, 0]}>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div 
                                        ref={ref} 
                                        className={`cmt-wrap ${animate && "animate__animated animate__bounceIn"}`}
                                    >
                                        <img src={avt1} alt="avt"/>
                                        <div className="cmt">
                                            <p>“I’ve been working at Fetch for some years. Not only do I tackle meaningful challenges and projects, I also get to enjoy valuable team-bonding sessions through company dinners and activities that allow me to exchange and learn new skills with my coworkers.”</p>
                                            <p className="signal">
                                                David Edelson,<br/>
                                                Front-End Developer
                                            </p>
                                        </div>
                                    </div>
                                )}
                            />
                        </Col>
                        <Col className="second-row-col-half" xs={24} md={12}>
                            <AnimationWrap
                                render={(ref, animate) => (
                                    <div
                                        ref={ref} 
                                        className={`cmt-wrap ${animate && "animate__animated animate__bounceIn"}`}
                                    >
                                        <img src={avt2} alt="avt"/>
                                        <div className="cmt">
                                            <p>“I just graduated from college and I’m glad to be able to begin my employment with Fetch. I get the opportunity of working with a global team while still living in Vietnam. This allows me to broaden my horizon without having to making additional expenses such as rent in a foreign country.”</p>
                                            <p className="signal">
                                                Alison Harrington,<br/>
                                                Ruby On Rails Developer
                                            </p>
                                        </div>
                                    </div>
                                )}
                            />
                            
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

